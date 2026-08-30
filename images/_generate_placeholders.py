#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate labelled placeholder JPEGs for every <image-slot> in the trip app.

Each file is named images/<slot-id>.jpg — exactly the path the app loads by
default (via the slot's `src`). To use a real photo, just overwrite the file
of the same name (keep it .jpg), or drag-drop it onto the slot in the browser.

Re-run after editing the trip data (adds/removes activities, days, dishes):
    python3 images/_generate_placeholders.py
The slot list lives in images/_slots.json.

Existing files are never overwritten (see make()), so this is safe to re-run —
delete a .jpg first if you want it regenerated.

Needs Pillow: pip3 install pillow. Works on Pillow 8 through 11+.
"""
import json, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
SLOTS = json.load(open(os.path.join(HERE, "_slots.json"), encoding="utf-8"))

# kurogane palette — matches the app's default theme
BG    = (20, 16, 11)
BG2   = (34, 27, 18)
INK   = (242, 231, 213)
SOFT  = (150, 135, 112)
GOLD  = (217, 170, 92)
EMBER = (208, 106, 62)

ACCENT = {"dish": EMBER}  # everything else uses gold
TAG = {
    "map": "THE ROUTE", "cover": "COVER", "daycover": "DAY",
    "activity": "PLACE", "route": "CITY", "traveler": "TRAVELLER", "dish": "DISH",
}

SERIF = ["/System/Library/Fonts/Supplemental/Georgia.ttf", "/Library/Fonts/Georgia.ttf"]
SANS  = ["/System/Library/Fonts/Supplemental/Arial.ttf", "/Library/Fonts/Arial.ttf"]
MONO  = ["/System/Library/Fonts/Menlo.ttc", "/System/Library/Fonts/Supplemental/Courier New.ttf"]


def load_font(paths, size):
    for p in paths:
        try:
            return ImageFont.truetype(p, size)
        except Exception:
            pass
    return ImageFont.load_default()


def norm(s):
    return (s.replace("’", "'").replace("‘", "'")
             .replace("“", '"').replace("”", '"')
             .replace("—", "-").replace("–", "-"))


def measure(font, text):
    """(width, height) in the sense Pillow's FreeTypeFont.getsize() meant.

    Pillow 10 removed getsize(). Its replacement getbbox() returns
    (left, top, right, bottom) measured from the same origin, and the old
    getsize() was defined as (size[0], size[1] + offset[1]) — which in getbbox
    terms is (right - left, bottom). Note the asymmetry: the height keeps the
    vertical offset but the width does not.

    Keep that exact mapping. Using (right - left, bottom - top) instead looks
    reasonable but drops the offset from the height, which shifts the wrapped
    title down ~11px and shrinks its line spacing — regenerated placeholders
    then no longer line up with the existing set.
    """
    if hasattr(font, "getbbox"):          # Pillow >= 8
        left, _top, right, bottom = font.getbbox(text)
        return right - left, bottom
    return font.getsize(text)             # Pillow < 8


def wrap(text, font, maxw):
    lines, cur = [], ""
    for w in text.split():
        t = (cur + " " + w).strip()
        if not cur or measure(font, t)[0] <= maxw:
            cur = t
        else:
            lines.append(cur); cur = w
    if cur:
        lines.append(cur)
    return lines


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def glow(size, center, radius, color, alpha):
    ov = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)
    x, y = center
    d.ellipse([x - radius, y - radius, x + radius, y + radius], fill=color + (alpha,))
    return ov.filter(ImageFilter.GaussianBlur(radius * 0.5))


def tracked(s):
    return " ".join(list(s))


def make(slot):
    out_path = os.path.join(HERE, slot["id"] + ".jpg")
    if os.path.exists(out_path):
        return  # SAFETY: never overwrite an existing image — protects real photos. Delete the file first to regenerate.
    W, H = slot["w"], slot["h"]
    cat = slot["cat"]
    accent = ACCENT.get(cat, GOLD)

    # vertical gradient (build 1px column, then stretch — fast)
    col = Image.new("RGB", (1, H))
    cp = col.load()
    for y in range(H):
        cp[0, y] = lerp(BG2, BG, y / max(1, H - 1))
    img = col.resize((W, H)).convert("RGBA")

    # soft theme glows (gold top-right, ember bottom-left)
    img.alpha_composite(glow((W, H), (int(W * 0.82), int(-H * 0.12)), int(W * 0.5), accent, 46))
    img.alpha_composite(glow((W, H), (int(-W * 0.1), int(H * 1.1)), int(W * 0.5), EMBER, 26))
    img = img.convert("RGB")
    d = ImageDraw.Draw(img)

    m = max(18, int(min(W, H) * 0.045))
    tick = int(min(W, H) * 0.05)

    # frame + corner ticks
    d.rectangle([m, m, W - m, H - m], outline=lerp(BG, accent, 0.30), width=2)
    tcol = lerp(BG, accent, 0.7)
    for cx, cy, dx, dy in [(m, m, 1, 1), (W - m, m, -1, 1), (m, H - m, 1, -1), (W - m, H - m, -1, -1)]:
        d.line([cx, cy, cx + dx * tick, cy], fill=tcol, width=3)
        d.line([cx, cy, cx, cy + dy * tick], fill=tcol, width=3)

    # category tag (top-left, letter-tracked)
    f_tag = load_font(SANS, max(12, int(H * 0.030)))
    d.text((m + int(tick * 0.7), m + int(tick * 0.55)), tracked(TAG.get(cat, "IMAGE")), font=f_tag, fill=accent)

    # framed-photo glyph
    iw = int(min(W, H) * 0.13); ih = int(iw * 0.72)
    ix, iy = W // 2 - iw // 2, int(H * 0.28)
    d.rectangle([ix, iy, ix + iw, iy + ih], outline=SOFT, width=2)
    d.ellipse([ix + int(iw * 0.16), iy + int(ih * 0.18), ix + int(iw * 0.32), iy + int(ih * 0.46)], outline=SOFT, width=2)
    d.line([ix + 4, iy + ih - 4, ix + int(iw * 0.40), iy + int(ih * 0.52),
            ix + int(iw * 0.60), iy + int(ih * 0.70), ix + int(iw * 0.80), iy + int(ih * 0.42),
            ix + iw - 4, iy + ih - 4], fill=SOFT, width=2)

    # title (centred, wrapped, auto-shrink to <=2 lines)
    title = norm(slot["label"])
    maxw = int(W * 0.78)
    fsize = int(H * 0.094)
    f_title = load_font(SERIF, fsize)
    lines = wrap(title, f_title, maxw)
    while len(lines) > 2 and fsize > 24:
        fsize = int(fsize * 0.85)
        f_title = load_font(SERIF, fsize)
        lines = wrap(title, f_title, maxw)
    lh = int(measure(f_title, "Ag")[1] * 1.22)
    total = lh * len(lines)
    ty = int(H * 0.50 - total / 2)
    for ln in lines:
        lw = measure(f_title, ln)[0]
        d.text((W / 2 - lw / 2, ty), ln, font=f_title, fill=INK)
        ty += lh

    # hint under the title
    f_hint = load_font(SANS, max(11, int(H * 0.026)))
    hint = "Replace map-kyushu.jpg with a Kyushu map" if cat == "map" else "Replace this file with your photo"
    hw = measure(f_hint, hint)[0]
    d.text((W / 2 - hw / 2, ty + int(lh * 0.25)), hint, font=f_hint, fill=SOFT)

    # footer: filename (left) + dimensions (right)
    f_foot = load_font(MONO, max(11, int(H * 0.026)))
    fy = H - m - int(tick * 0.5) - measure(f_foot, "0")[1]
    fn = "images/%s.jpg" % slot["id"]
    d.text((m + int(tick * 0.7), fy), fn, font=f_foot, fill=SOFT)
    dim = "%d x %d" % (W, H)
    d.text((W - m - int(tick * 0.7) - measure(f_foot, dim)[0], fy), dim, font=f_foot, fill=SOFT)

    img.save(os.path.join(HERE, slot["id"] + ".jpg"), "JPEG", quality=82)


PAGE = {
    "map": "Overview — route-map background (วางรูปแผนที่คิวชู; หมุดเมืองอยู่ตามตำแหน่งจริงคร่าวๆ — ปรับ mx/my ในข้อมูลได้)",
    "cover": "Cover screen",
    "daycover": "Itinerary — day header",
    "activity": "Itinerary timeline + activity detail",
    "route": "Overview — route-map pins",
    "traveler": "Overview — The Party",
    "dish": "Activity menu — dish photo popup",
}
ORDER = ["map", "cover", "daycover", "route", "traveler", "activity", "dish"]


def write_manifest():
    by = {}
    for s in SLOTS:
        by.setdefault(s["cat"], []).append(s)
    out = []
    out.append("# images — placeholder photos for the trip app\n")
    out.append("ทุกช่องรูปในเว็บ (`Japan Trip - App.html`) โหลดไฟล์จากโฟลเดอร์นี้ "
               "ตามชื่อ `images/<id>.jpg` ตอนนี้เป็น **รูป placeholder** ที่มี label บอกว่าแต่ละช่องคืออะไร\n")
    out.append("## วิธีใส่รูปจริง\n")
    out.append("- **ง่ายสุด — เซฟรูปจริงทับไฟล์เดิม ใช้ชื่อเดิม + นามสกุล `.jpg`** "
               "(เช่น เอารูปโดนัทเซฟทับ `a-d1-imdonut.jpg`) เปิดเว็บใหม่เห็นเลย ไม่ต้องแก้โค้ด\n")
    out.append("- รองรับ `.jpg` เป็นหลัก — ถ้าอยากใช้ `.png`/`.webp` บอกให้เปิด fallback หลายนามสกุลได้\n")
    out.append("- อยากเปลี่ยน **ชื่อไฟล์** เอง: ทำได้ แต่ต้องไปแก้ `imageId`/`coverId` ในข้อมูล (ในไฟล์ HTML) ให้ตรงกัน\n")
    out.append("- เพิ่ม/ลบกิจกรรมแล้วอยากได้ placeholder ใหม่: รัน `python3 images/_generate_placeholders.py` "
               "(แก้รายการได้ที่ `images/_slots.json`)\n")
    out.append("\n---\n")
    total = 0
    for cat in ORDER:
        items = by.get(cat, [])
        if not items:
            continue
        out.append("\n### %s — %d รูป\n" % (PAGE.get(cat, cat), len(items)))
        out.append("\n| ไฟล์ | คือ | ขนาด |")
        out.append("\n|---|---|---|")
        for s in items:
            out.append("\n| `%s.jpg` | %s | %d×%d |" % (s["id"], s["label"], s["w"], s["h"]))
        out.append("\n")
        total += len(items)
    out.append("\n_รวม %d ไฟล์ · สร้างจาก `_generate_placeholders.py`_\n" % total)
    open(os.path.join(HERE, "README.md"), "w", encoding="utf-8").write("".join(out))


def main():
    new = skipped = 0
    for s in SLOTS:
        if os.path.exists(os.path.join(HERE, s["id"] + ".jpg")):
            skipped += 1
        else:
            make(s); new += 1
    write_manifest()
    print("generated %d new placeholder(s) \u00b7 kept %d existing image(s) UNTOUCHED + README.md" % (new, skipped))


if __name__ == "__main__":
    main()
