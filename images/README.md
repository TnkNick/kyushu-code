# images — placeholder photos for the trip app
ทุกช่องรูปในเว็บ (`Japan Trip - App.html`) โหลดไฟล์จากโฟลเดอร์นี้ ตามชื่อ `images/<id>.jpg` ตอนนี้เป็น **รูป placeholder** ที่มี label บอกว่าแต่ละช่องคืออะไร
## วิธีใส่รูปจริง
- **ง่ายสุด — เซฟรูปจริงทับไฟล์เดิม ใช้ชื่อเดิม + นามสกุล `.jpg`** (เช่น เอารูปโดนัทเซฟทับ `a-d1-imdonut.jpg`) เปิดเว็บใหม่เห็นเลย ไม่ต้องแก้โค้ด
- รองรับ `.jpg` เป็นหลัก — ถ้าอยากใช้ `.png`/`.webp` บอกให้เปิด fallback หลายนามสกุลได้
- อยากเปลี่ยน **ชื่อไฟล์** เอง: ทำได้ แต่ต้องไปแก้ `imageId`/`coverId` ในข้อมูล (ในไฟล์ HTML) ให้ตรงกัน
- เพิ่ม/ลบกิจกรรมแล้วอยากได้ placeholder ใหม่: รัน `python3 images/_generate_placeholders.py` (แก้รายการได้ที่ `images/_slots.json`)

---

### Overview — route-map background (วางรูปแผนที่คิวชู; หมุดเมืองอยู่ตามตำแหน่งจริงคร่าวๆ — ปรับ mx/my ในข้อมูลได้) — 1 รูป

| ไฟล์ | คือ | ขนาด |
|---|---|---|
| `map-kyushu.jpg` | Kyushu route map | 1280×800 |

### Cover screen — 1 รูป

| ไฟล์ | คือ | ขนาด |
|---|---|---|
| `cover-hero.jpg` | Cover · Kyushu | 1280×800 |

### Itinerary — day header — 11 รูป

| ไฟล์ | คือ | ขนาด |
|---|---|---|
| `day1-cover.jpg` | Day 1 · Fukuoka | 1280×800 |
| `day2-cover.jpg` | Day 2 · Mt Aso | 1280×800 |
| `day3-cover.jpg` | Day 3 · Kumamoto | 1280×800 |
| `day4-cover.jpg` | Day 4 · Beppu | 1280×800 |
| `day5-cover.jpg` | Day 5 · Yufuin | 1280×800 |
| `day6-cover.jpg` | Day 6 · Return to Hakata | 1280×800 |
| `day7-cover.jpg` | Day 7 · Dazaifu | 1280×800 |
| `day8-cover.jpg` | Day 8 · Itoshima | 1280×800 |
| `day9-cover.jpg` | Day 9 · Fukuoka — Slow Day | 1280×800 |
| `day10-cover.jpg` | Day 10 · Last Day in Fukuoka | 1280×800 |
| `day11-cover.jpg` | Day 11 · Homeward | 1280×800 |

### Overview — route-map pins — 6 รูป

| ไฟล์ | คือ | ขนาด |
|---|---|---|
| `r-fukuoka.jpg` | Fukuoka | 820×820 |
| `r-aso.jpg` | Aso · Kurokawa | 820×820 |
| `r-kumamoto.jpg` | Kumamoto | 820×820 |
| `r-beppu.jpg` | Beppu | 820×820 |
| `r-yufuin.jpg` | Yufuin | 820×820 |
| `r-itoshima.jpg` | Itoshima | 820×820 |

### Overview — The Party — 4 รูป

| ไฟล์ | คือ | ขนาด |
|---|---|---|
| `p-nick.jpg` | Nick | 820×820 |
| `p-bank.jpg` | Bank | 820×820 |
| `p-tagot.jpg` | Tagot | 820×820 |
| `p-tum.jpg` | P’Tum | 820×820 |

### Itinerary timeline + activity detail — 66 รูป

| ไฟล์ | คือ | ขนาด |
|---|---|---|
| `a-d1-imdonut.jpg` | I’m Donut? | 1280×800 |
| `a-d1-fukcoffee.jpg` | Fuk Coffee | 1280×800 |
| `a-d1-ramen.jpg` | Menya Gaga · Tenjin | 1280×800 |
| `a-d1-canalcity.jpg` | Canal City & Tenjin | 1280×800 |
| `a-d1-illum.jpg` | Winter Illumination | 1280×800 |
| `a-d1-motsunabe.jpg` | Motsunabe Rakutenchi | 1280×800 |
| `a-d1-nightlife.jpg` | FUKUOKA CRAFT by El Borracho | 1280×800 |
| `a-d2-cityrun.jpg` | Morning city run | 1280×800 |
| `a-d3-daikanbo.jpg` | Daikanbo viewpoint | 1280×800 |
| `a-d3-lunch.jpg` | Aso Akaushi-don | 1280×800 |
| `a-d3-kusasenri.jpg` | Kusasenri & Komezuka | 1280×800 |
| `a-d3-tegata.jpg` | Kurokawa rotenburo-meguri | 1280×800 |
| `a-d3-nakadake.jpg` | Nakadake Crater | 1280×800 |
| `a-d3-sweets.jpg` | Aso Milk soft serve | 1280×800 |
| `a-d3-kaiseki.jpg` | Ryokan kaiseki | 1280×800 |
| `a-d4-katsuretsu.jpg` | Katsuretsu-tei | 1280×800 |
| `a-d4-castle.jpg` | Kumamoto Castle | 1280×800 |
| `a-d4-suizenji.jpg` | Suizenji Jojuen | 1280×800 |
| `a-d4-sweets.jpg` | Ikinari Dango | 1280×800 |
| `a-d4-basashi.jpg` | Basashi dinner | 1280×800 |
| `a-d5-lunch.jpg` | Roadside lunch | 1280×800 |
| `a-d5-umijigoku.jpg` | Umi Jigoku | 1280×800 |
| `a-d5-chinoike.jpg` | Chinoike Jigoku | 1280×800 |
| `a-d5-sweets.jpg` | Beppu Purin | 1280×800 |
| `a-d5-sushi.jpg` | Katsugyo kaiten sushi | 1280×800 |
| `a-d6-kinrin.jpg` | Kinrin Lake | 1280×800 |
| `a-d6-mabushi.jpg` | Yufu Mabushi | 1280×800 |
| `a-d6-yunotsubo.jpg` | Yunotsubo Kaido | 1280×800 |
| `a-d6-sweets.jpg` | Yufuin Sweets · B-speak & Milch | 1280×800 |
| `a-d6-ryokan.jpg` | Ryokan kaiseki | 1280×800 |
| `a-d7-mist.jpg` | Kinrin Lake at dawn | 1280×800 |
| `a-d7-komyozenji.jpg` | Komyozenji moss garden | 1280×800 |
| `a-d7-lunch.jpg` | Lunch stop · Hita | 1280×800 |
| `a-d7-shopping.jpg` | Tenjin & Canal City | 1280×800 |
| `a-d7-tempura.jpg` | Tempura Hirao | 1280×800 |
| `a-d2-tenmangu.jpg` | Dazaifu Tenmangu | 1280×800 |
| `a-d2-omotesando.jpg` | Omotesando & Umegae Mochi | 1280×800 |
| `a-d2-starbucks.jpg` | Starbucks Dazaifu | 1280×800 |
| `a-d2-unagi.jpg` | Yanagawa Unagi Seiro-mushi | 1280×800 |
| `a-d2-yanagawa.jpg` | Yanagawa river boat | 1280×800 |
| `a-d2-yatai.jpg` | Nakasu Yatai dinner | 1280×800 |
| `a-d2-nightlife.jpg` | Seimon-Barai izakaya | 1280×800 |
| `a-d8-torii.jpg` | Sakurai Futamigaura | 1280×800 |
| `a-d8-cafes.jpg` | Sunset Road cafés | 1280×800 |
| `a-d8-oyster.jpg` | Kaki-goya oyster hut | 1280×800 |
| `a-d8-keya.jpg` | Keya no Oto | 1280×800 |
| `a-d8-sunset.jpg` | Sunset over the sea | 1280×800 |
| `a-d8-dinner.jpg` | Hakata Mizutaki · Hanamidori | 1280×800 |
| `a-d9-ohori.jpg` | Ohori Park | 1280×800 |
| `a-d9-maizuru.jpg` | Fukuoka Castle ruins | 1280×800 |
| `a-d9-lunch.jpg` | Lunch in Daimyo | 1280×800 |
| `a-d9-daimyo.jpg` | Daimyo & Tenjin | 1280×800 |
| `a-d9-sweets.jpg` | Campbell Early | 1280×800 |
| `a-d9-tower.jpg` | Fukuoka Tower & Momochi | 1280×800 |
| `a-d9-yakiniku.jpg` | Yakiniku / sushi dinner | 1280×800 |
| `a-d9-nightlife.jpg` | Ibiza FUKUOKA | 1280×800 |
| `a-d10-mentaiko.jpg` | Mentaiko & souvenirs | 1280×800 |
| `a-d10-ramen.jpg` | Farewell ramen | 1280×800 |
| `a-d10-canal.jpg` | Last shopping run | 1280×800 |
| `a-d10-illum.jpg` | Final illumination stroll | 1280×800 |
| `a-d10-dinner.jpg` | Hakata Yakitori | 1280×800 |
| `a-d10-nightlife.jpg` | Bar Gentle — a quiet last drink | 1280×800 |
| `a-d2-milkroad.jpg` | Milk Road | 1280×800 |
| `a-d2-nishiyu.jpg` | Nishiyunoura Observatory | 1280×800 |
| `a-d2-komezuka.jpg` | Komezuka Observatory | 1280×800 |
| `a-d2-dinner.jpg` | Kumamoto ramen | 1280×800 |

### Activity menu — dish photo popup — 76 รูป

| ไฟล์ | คือ | ขนาด |
|---|---|---|
| `dish-a-d1-imdonut-0.jpg` | Original I’m Donut | 1080×810 |
| `dish-a-d1-imdonut-1.jpg` | Pistachio donut | 1080×810 |
| `dish-a-d1-imdonut-2.jpg` | Custard donut | 1080×810 |
| `dish-a-d1-fukcoffee-0.jpg` | Fukuoka-map latte | 1080×810 |
| `dish-a-d1-fukcoffee-1.jpg` | Drip coffee | 1080×810 |
| `dish-a-d1-ramen-0.jpg` | Tonkotsu ramen | 1080×810 |
| `dish-a-d1-ramen-1.jpg` | Ajitama ramen | 1080×810 |
| `dish-a-d1-ramen-2.jpg` | Chashu ramen | 1080×810 |
| `dish-a-d1-ramen-3.jpg` | Gyoza | 1080×810 |
| `dish-a-d1-motsunabe-0.jpg` | Motsunabe · soy broth | 1080×810 |
| `dish-a-d1-motsunabe-1.jpg` | Motsunabe · miso broth | 1080×810 |
| `dish-a-d1-motsunabe-2.jpg` | Champon shime | 1080×810 |
| `dish-a-d1-motsunabe-3.jpg` | Su-motsu | 1080×810 |
| `dish-a-d2-starbucks-0.jpg` | Seasonal latte | 1080×810 |
| `dish-a-d2-starbucks-1.jpg` | Umegae mochi (nearby) | 1080×810 |
| `dish-a-d2-starbucks-2.jpg` | Matcha frappuccino | 1080×810 |
| `dish-a-d2-yatai-0.jpg` | Yakitori skewers | 1080×810 |
| `dish-a-d2-yatai-1.jpg` | Tonkotsu ramen | 1080×810 |
| `dish-a-d2-yatai-2.jpg` | Oden | 1080×810 |
| `dish-a-d2-yatai-3.jpg` | Mentai tamagoyaki | 1080×810 |
| `dish-a-d3-kaiseki-0.jpg` | Kumamoto wagyu | 1080×810 |
| `dish-a-d3-kaiseki-1.jpg` | River fish shioyaki | 1080×810 |
| `dish-a-d3-kaiseki-2.jpg` | Seasonal sakizuke | 1080×810 |
| `dish-a-d3-kaiseki-3.jpg` | Mountain-vegetable nimono | 1080×810 |
| `dish-a-d4-katsuretsu-0.jpg` | Loin tonkatsu set | 1080×810 |
| `dish-a-d4-katsuretsu-1.jpg` | Fillet tonkatsu | 1080×810 |
| `dish-a-d4-katsuretsu-2.jpg` | Kuruma-ebi fry | 1080×810 |
| `dish-a-d4-katsuretsu-3.jpg` | Pork-cutlet sandwich | 1080×810 |
| `dish-a-d4-basashi-0.jpg` | Lean basashi | 1080×810 |
| `dish-a-d4-basashi-1.jpg` | Fatty (toro) basashi | 1080×810 |
| `dish-a-d4-basashi-2.jpg` | Karashi renkon | 1080×810 |
| `dish-a-d4-basashi-3.jpg` | Taipi-en | 1080×810 |
| `dish-a-d5-sushi-0.jpg` | Bungo-bay sashimi | 1080×810 |
| `dish-a-d5-sushi-1.jpg` | Seki-saba | 1080×810 |
| `dish-a-d5-sushi-2.jpg` | Toriten | 1080×810 |
| `dish-a-d5-sushi-3.jpg` | Aji nigiri | 1080×810 |
| `dish-a-d6-mabushi-0.jpg` | Bungo beef mabushi | 1080×810 |
| `dish-a-d6-mabushi-1.jpg` | Jidori chicken mabushi | 1080×810 |
| `dish-a-d6-mabushi-2.jpg` | Dashi pour-over | 1080×810 |
| `dish-a-d6-mabushi-3.jpg` | Yufuin pudding | 1080×810 |
| `dish-a-d6-ryokan-0.jpg` | Seasonal sakizuke | 1080×810 |
| `dish-a-d6-ryokan-1.jpg` | Bungo wagyu shabu | 1080×810 |
| `dish-a-d6-ryokan-2.jpg` | Grilled river fish | 1080×810 |
| `dish-a-d6-ryokan-3.jpg` | Winter vegetable nimono | 1080×810 |
| `dish-a-d7-tempura-0.jpg` | Prawn tempura | 1080×810 |
| `dish-a-d7-tempura-1.jpg` | Seasonal vegetable tempura | 1080×810 |
| `dish-a-d7-tempura-2.jpg` | Anago tempura | 1080×810 |
| `dish-a-d7-tempura-3.jpg` | Tempura over rice | 1080×810 |
| `dish-a-d8-oyster-0.jpg` | Grilled oysters | 1080×810 |
| `dish-a-d8-oyster-1.jpg` | Grilled scallops | 1080×810 |
| `dish-a-d8-oyster-2.jpg` | Sazae turban shell | 1080×810 |
| `dish-a-d8-oyster-3.jpg` | Oyster rice | 1080×810 |
| `dish-a-d9-yakiniku-0.jpg` | Kuroge wagyu set | 1080×810 |
| `dish-a-d9-yakiniku-1.jpg` | Harami skirt steak | 1080×810 |
| `dish-a-d9-yakiniku-2.jpg` | Tongue (tan) salt | 1080×810 |
| `dish-a-d9-yakiniku-3.jpg` | Cold noodles (reimen) | 1080×810 |
| `dish-a-d10-ramen-0.jpg` | Tonkotsu ramen | 1080×810 |
| `dish-a-d10-ramen-1.jpg` | Spicy mentai ramen | 1080×810 |
| `dish-a-d10-ramen-2.jpg` | Kaedama | 1080×810 |
| `dish-a-d10-ramen-3.jpg` | Gyoza | 1080×810 |
| `dish-a-d3-sweets-0.jpg` | Aso milk soft serve | 1080×810 |
| `dish-a-d3-sweets-1.jpg` | Aso milk pudding | 1080×810 |
| `dish-a-d3-sweets-2.jpg` | Bottled Aso milk | 1080×810 |
| `dish-a-d4-sweets-0.jpg` | Classic ikinari dango | 1080×810 |
| `dish-a-d4-sweets-1.jpg` | Mugwort (yomogi) dango | 1080×810 |
| `dish-a-d4-sweets-2.jpg` | Honey castella | 1080×810 |
| `dish-a-d5-sweets-0.jpg` | Classic Beppu purin | 1080×810 |
| `dish-a-d5-sweets-1.jpg` | Jigoku-mushi purin | 1080×810 |
| `dish-a-d5-sweets-2.jpg` | Purin a la mode | 1080×810 |
| `dish-a-d6-sweets-0.jpg` | B-speak P-roll | 1080×810 |
| `dish-a-d6-sweets-1.jpg` | Milch cheese tart (warm) | 1080×810 |
| `dish-a-d6-sweets-2.jpg` | Milch cheese tart (cold) | 1080×810 |
| `dish-a-d6-sweets-3.jpg` | Kinrin Lake croquette | 1080×810 |
| `dish-a-d9-sweets-0.jpg` | Seasonal fruit parfait | 1080×810 |
| `dish-a-d9-sweets-1.jpg` | Fluffy fruit pancakes | 1080×810 |
| `dish-a-d9-sweets-2.jpg` | Fruit sandwich | 1080×810 |

_รวม 165 ไฟล์ · สร้างจาก `_generate_placeholders.py`_
