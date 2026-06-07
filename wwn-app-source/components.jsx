// components.jsx — lookbook UI (bilingual). Depends on window.Icon, REF_TYPES, tx, tr.
const { useState, useEffect, useRef, useContext, createContext } = React;

// Language context — provides current lang + resolvers x()/r().
const LangCtx = createContext('en');
function useT() {
  const lang = useContext(LangCtx);
  return { lang, x: (v) => window.tx(v, lang), r: (s) => window.tr(s, lang) };
}

// ── LangToggle — TH / EN segmented switch ──────────────────────────────
function LangToggle({ lang, onChange, tone = 'ink' }) {
  return (
    <div className={'lang-toggle' + (tone === 'ondark' ? ' on-dark' : '')} role="group" aria-label="Language">
      <button className={lang === 'en' ? 'on' : ''} onClick={() => onChange('en')}>EN</button>
      <button className={lang === 'th' ? 'on' : ''} onClick={() => onChange('th')}>ไทย</button>
    </div>
  );
}

// ── ImageFrame ─────────────────────────────────────────────────────────
function ImageFrame({ id, placeholder, ratio = '4 / 3', className = '', kicker }) {
  return (
    <div className={'img-frame ' + className} style={{ aspectRatio: ratio }}>
      <image-slot
        id={id}
        src={id ? 'images/' + id + '.jpg' : undefined}
        shape="rect"
        placeholder={placeholder || 'Drop image'}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
      ></image-slot>
      {kicker ? <span className="img-kicker">{kicker}</span> : null}
      <span className="img-edge" aria-hidden="true"></span>
    </div>
  );
}

// ── ReferenceDock ──────────────────────────────────────────────────────
function ResValue({ value }) {
  const { x, r } = useT();
  return (
    <div className="dock-res">
      <div className="dock-res-row"><span className="dock-res-k">{r('Time')}</span><span className="dock-res-v">{value.time}</span></div>
      <div className="dock-res-row"><span className="dock-res-k">{r('Confirmation')}</span><span className="dock-res-v mono">{value.code}</span></div>
      <div className="dock-res-row"><span className="dock-res-k">{r('Party')}</span><span className="dock-res-v">{x(value.party)}</span></div>
    </div>
  );
}

function RefValue({ type, value }) {
  const { x } = useT();
  if (type.kind === 'reservation') return <ResValue value={value} />;
  if (type.kind === 'link') {
    let host = value;
    try { host = new URL(value).hostname.replace(/^www\./, ''); } catch (e) {}
    return (
      <a className="dock-link" href={value} target="_blank" rel="noopener noreferrer">
        <span className="dock-link-url">{host}</span>
        <Icon name="arrowUpRight" size={14} stroke={1.4} />
      </a>
    );
  }
  if (type.key === 'notes') return <p className="dock-notes">{x(value)}</p>;
  return <p className="dock-text">{x(value)}</p>;
}

function ReferenceDock({ refs, variant = 'inline' }) {
  const { x } = useT();
  const present = REF_TYPES.filter((t) => refs && refs[t.key] != null);
  const [active, setActive] = useState(null);
  if (!present.length) return null;

  if (variant === 'expanded') {
    return (
      <div className="dock dock-expanded">
        {present.map((t) => (
          <div className="dock-card" key={t.key}>
            <div className="dock-card-hd">
              <Icon name={t.icon} size={16} stroke={1.3} />
              <span className="dock-card-label">{x(t.label)}</span>
            </div>
            <div className="dock-card-body"><RefValue type={t} value={refs[t.key]} /></div>
          </div>
        ))}
      </div>
    );
  }

  const activeType = present.find((t) => t.key === active);
  return (
    <div className={'dock' + (active ? ' is-open' : '')}>
      <div className="dock-rail">
        {present.map((t) => (
          <button
            key={t.key}
            type="button"
            className={'dock-chip' + (active === t.key ? ' active' : '')}
            onClick={() => setActive(active === t.key ? null : t.key)}
          >
            <Icon name={t.icon} size={15} stroke={1.3} />
            <span className="dock-chip-label">{x(t.label)}</span>
          </button>
        ))}
      </div>
      <div className="dock-drawer" style={{ gridTemplateRows: active ? '1fr' : '0fr' }}>
        <div className="dock-drawer-inner">
          {activeType ? (
            <div className="dock-detail" key={activeType.key}>
              <RefValue type={activeType} value={refs[activeType.key]} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

// ── reveal-on-scroll hook ──────────────────────────────────────────────
function useInView() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) el.classList.add('in'); }),
      { threshold: 0.16 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// ── StepBlock — compact logistics row (flights, tickets, transit) ───────
function StepBlock({ a, index }) {
  const { x, r } = useT();
  const ref = useInView();
  return (
    <article className="tl-row tl-row-step" ref={ref} style={{ '--i': index }}>
      <div className="tl-mid" aria-hidden="true"><span className="tl-dot tl-dot-step"></span></div>
      <div className="tl-content">
        <div className="step">
          <div className="step-lead">
            <span className="step-time">{a.time}</span>
            <span className="step-ic"><Icon name={a.icon || 'compass'} size={18} stroke={1.3} /></span>
          </div>
          <div className="step-body">
            <div className="step-head">
              <h4 className="step-title">{x(a.title)}</h4>
              <span className="step-kind">{r(a.kind)}</span>
            </div>
            <p className="step-place">{x(a.place)}</p>
            <p className="step-note">{x(a.blurb)}</p>
            <div className="step-dock" onClick={(e) => e.stopPropagation()}>
              <ReferenceDock refs={a.refs} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// ── FeatureBlock — hero image + caption + dock (sightseeing, dining) ─────
function FeatureBlock({ a, index, onOpen }) {
  const { x, r } = useT();
  const ref = useInView();
  return (
    <article className="tl-row" ref={ref} style={{ '--i': index }}>
      <div className="tl-mid" aria-hidden="true"><span className="tl-dot"></span></div>

      <div className="tl-content">
        <div className="tl-head" onClick={() => onOpen(a)}>
          <span className="tl-time">{a.time}</span>
          <span className="tl-meridiem">{r(a.meridiem)}</span>
          <span className="tl-headrule" aria-hidden="true"></span>
        </div>

        <div className="activity" onClick={() => onOpen(a)}>
          <div className="activity-media">
            <ImageFrame id={a.imageId} placeholder={x(a.title)} ratio="16 / 10" kicker={r(a.kind)} />
          </div>
          <div className="activity-caption">
            <div className="activity-text">
              <h3 className="activity-title">{x(a.title)}</h3>
              <p className="activity-place">{x(a.place)}</p>
              <p className="activity-blurb">{x(a.blurb)}</p>
              <button className="activity-open" onClick={(e) => { e.stopPropagation(); onOpen(a); }}>
                <span>{x({ en: 'View detail', th: 'ดูรายละเอียด' })}</span>
                <Icon name="arrowRight" size={15} stroke={1.4} />
              </button>
            </div>
            <div className="activity-foot" onClick={(e) => e.stopPropagation()}>
              <ReferenceDock refs={a.refs} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ActivityBlock({ a, index, onOpen }) {
  return a.type === 'step'
    ? <StepBlock a={a} index={index} />
    : <FeatureBlock a={a} index={index} onOpen={onOpen} />;
}

// ── Timeline ───────────────────────────────────────────────────────────
// ── Per-day konbini — nearest store to that night's stay ────────────────
function konbiniForDay(day) {
  if (!window.KONBINI || !window.KONBINI.areas) return null;
  const n = parseInt((day.label.match(/\d+/) || [])[0], 10);
  if (!n) return null;
  return window.KONBINI.areas.find((ar) => {
    const nums = (ar.days.en.match(/\d+/g) || []).map(Number);
    if (nums.length === 1) return nums[0] === n;
    if (nums.length >= 2) return n >= nums[0] && n <= nums[nums.length - 1];
    return false;
  }) || null;
}

function DayKonbini({ area }) {
  const { x } = useT();
  if (!area) return null;
  const cats = [
    { items: area.stores,   icon: 'store',  label: { en: 'Convenience', th: 'ร้านสะดวกซื้อ' } },
    { items: area.pharmacy, icon: 'plus',   label: { en: 'Pharmacy', th: 'ร้านขายยา' } },
    { items: area.hospital, icon: 'alert',  label: { en: 'Hospital', th: 'โรงพยาบาล' } },
    { items: area.donki,    icon: 'wallet', label: { en: 'Don Quijote', th: 'ดองกี้' } },
  ].filter((c) => c.items && c.items.length);
  if (!cats.length) return null;
  return (
    <div className="dnear">
      <div className="dnear-head">
        <Icon name="pin" size={13} stroke={1.5} />
        <span className="dnear-title">{x({ en: 'Near your stay', th: 'ใกล้ที่พัก' })}</span>
        <span className="dnear-area">{x(area.area)}</span>
      </div>
      <div className="dnear-cats">
        {cats.map((c, ci) => (
          <div className="dnear-cat" key={ci}>
            <span className="dnear-cat-head">
              <span className="dnear-cat-ic"><Icon name={c.icon} size={14} stroke={1.5} /></span>
              <span className="dnear-cat-label">{x(c.label)}</span>
            </span>
            <span className="dnear-chips">
              {c.items.map((st, i) => (
                <a className="dnear-chip" key={i} href={st.map} target="_blank" rel="noopener noreferrer" title={x(st.detail)}>{st.brand}</a>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Per-day weather chip ───────────────────────────────────
function weatherForDay(day) {
  if (!window.WEATHER) return null;
  const n = parseInt((day.label.match(/\d+/) || [])[0], 10);
  return (n && window.WEATHER.days[n]) || null;
}

function DayWeather({ wx, note }) {
  const { x } = useT();
  if (!wx) return null;
  return (
    <span className="day-wx" title={note ? x(note) : undefined}>
      <Icon name={wx.icon} size={18} stroke={1.4} />
      <span className="day-wx-temp">{wx.hi}°<span className="day-wx-lo"> / {wx.lo}°</span></span>
      <span className="day-wx-cond">{x(wx.label)}</span>
    </span>
  );
}

function Timeline({ day, onOpen }) {
  const { x, lang } = useT();
  return (
    <section className="day" key={day.label}>
      <header className="day-head">
        <div className="day-head-row">
          <span className="day-label">{lang === 'th' ? day.labelTh : day.label}</span>
          <span className="day-rule" aria-hidden="true"></span>
          <span className="day-date">{x(day.date)}</span>
          <DayWeather wx={weatherForDay(day)} note={window.WEATHER && window.WEATHER.note} />
        </div>
        <h2 className="day-title">{x(day.title)}</h2>
        <p className="day-sub">{x(day.subtitle)}</p>
        <p className="day-note">{x(day.note)}</p>
      </header>

      <DayKonbini area={konbiniForDay(day)} />

      <div className="timeline">
        {day.activities.map((a, i) => (
          <ActivityBlock key={a.imageId || (a.kind + a.time)} a={a} index={i} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

// ── Cover ──────────────────────────────────────────────────────────────
function Cover({ trip, onEnter, lang, onLang }) {
  const { x } = useT();
  return (
    <section className="cover">
      <div className="cover-bg">
        <ImageFrame id={trip.coverId} placeholder="Drop a cover image — a Kyoto street, a temple, autumn maples" ratio="" className="cover-img" />
      </div>
      <div className="cover-veil" aria-hidden="true"></div>
      <div className="cover-inner">
        <div className="cover-top">
          <span className="wordmark"><Icon name="feather" size={17} stroke={1.3} /> <b>WWN</b> <span className="wwn-full">World Wide Nick</span></span>
          <div className="cover-top-r">
            <LangToggle lang={lang} onChange={onLang} tone="ondark" />
            <span className="cover-origin">{x(trip.origin)}</span>
          </div>
        </div>

        <div className="cover-center">
          <span className="cover-kicker">{x(trip.meta)}</span>
          <h1 className="cover-title">{x(trip.title)}</h1>
          <p className="cover-subtitle">{x(trip.subtitle)}</p>
        </div>

        <div className="cover-bottom">
          <div className="cover-dates">
            <Icon name="calendar" size={16} stroke={1.3} />
            <span>{x(trip.dates)}</span>
          </div>
          <button className="cover-enter" onClick={onEnter}>
            <span>{x({ en: 'Open the itinerary', th: 'เปิดแผนการเดินทาง' })}</span>
            <span className="cover-enter-i"><Icon name="arrowRight" size={16} stroke={1.5} /></span>
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Clock — live dual-timezone (home ⇄ Japan), updates every second ─────
function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}
function fmtTime(date, tz) {
  try {
    return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: tz }).format(date);
  } catch (e) { return '--:--:--'; }
}
function Clock({ variant = 'chrome' }) {
  const { x } = useT();
  const now = useNow();
  const jp = fmtTime(now, 'Asia/Tokyo');
  const bkk = fmtTime(now, 'Asia/Bangkok');
  if (variant === 'chrome') {
    const dateStr = now.toLocaleDateString('en-GB', { timeZone: 'Asia/Tokyo', day: 'numeric', month: 'short', year: 'numeric' });
    return (
      <div className="clock-chrome" title="Japan Standard Time">
        <span className="clock-date">{dateStr}</span>
        <span className="clock-time mono"><span className="clock-zone">JP</span>{jp.split(':').slice(0, 2).join(':')}</span>
      </div>
    );
  }
  // 'panel' — the larger dual clock used on the Overview screen
  return (
    <div className="clock-panel">
      <div className="clock-cell">
        <span className="clock-cell-zone">{x({ en: 'Japan · Tokyo', th: 'ญี่ปุ่น · โตเกียว' })}</span>
        <span className="clock-cell-time mono">{jp}</span>
      </div>
      <span className="clock-div" aria-hidden="true"></span>
      <div className="clock-cell">
        <span className="clock-cell-zone">{x({ en: 'Home · Bangkok', th: 'บ้าน · กรุงเทพฯ' })}</span>
        <span className="clock-cell-time mono">{bkk}</span>
      </div>
    </div>
  );
}

const KYUSHU_GEO = "M22.91,26.67 L26.78,26.36 L27.64,26.82 L28.45,26.21 L30.14,26.64 L31.18,26.32 L33.92,28.17 L35.30,28.43 L35.97,29.13 L35.82,29.77 L36.76,29.53 L36.99,28.85 L38.81,27.71 L40.20,27.98 L40.16,31.93 L39.28,31.88 L38.85,32.63 L38.21,32.42 L38.46,33.19 L37.39,33.63 L37.79,34.17 L37.16,35.14 L36.54,34.01 L35.97,35.63 L35.14,35.35 L34.92,36.16 L34.47,36.05 L34.65,36.99 L33.33,37.70 L33.90,40.30 L31.57,40.03 L30.09,37.71 L30.13,38.15 L29.03,37.86 L29.58,38.30 L29.27,39.27 L26.74,41.44 L25.80,40.94 L26.00,41.62 L25.47,41.92 L26.42,42.20 L28.18,46.47 L29.23,47.13 L29.20,47.78 L24.54,47.15 L22.41,45.24 L21.87,45.32 L21.34,44.13 L18.84,42.36 L18.98,41.66 L19.99,41.28 L19.57,39.31 L17.66,39.64 L15.24,38.52 L14.85,37.41 L15.08,36.09 L13.19,34.10 L14.27,32.03 L15.87,34.24 L16.45,34.02 L15.57,33.18 L16.30,32.51 L15.57,32.15 L16.26,32.17 L16.98,29.25 L15.41,29.07 L15.68,28.66 L14.02,27.32 L14.83,27.19 L14.39,26.61 L14.81,26.04 L15.94,26.99 L15.84,27.76 L16.63,27.33 L16.34,26.45 L15.71,26.41 L16.16,26.31 L15.57,24.70 L16.57,25.20 L15.99,24.50 L16.57,24.63 L16.18,23.14 L17.22,23.89 L17.20,24.76 L17.95,23.38 L18.65,23.69 L19.06,23.33 L19.09,23.89 L20.04,24.20 L20.42,25.07 L19.35,26.31 L19.99,26.69 L20.26,26.10 L20.42,27.28 L22.24,27.65 L22.96,27.25 L22.80,26.88Z M60.15,38.53 L61.86,40.28 L62.35,42.65 L63.77,43.83 L64.20,45.65 L65.45,47.09 L64.83,47.82 L65.17,50.58 L67.73,53.02 L65.52,53.29 L64.46,55.16 L64.81,55.56 L64.45,56.68 L62.53,58.05 L62.38,59.65 L61.28,59.50 L60.35,60.88 L60.04,63.35 L58.06,63.20 L57.67,64.45 L56.91,64.90 L57.18,65.92 L56.65,66.14 L56.53,67.09 L56.97,69.29 L57.78,70.55 L58.62,70.61 L58.87,72.68 L60.15,73.88 L59.02,75.83 L58.06,75.62 L57.76,77.12 L58.77,77.67 L59.19,78.90 L59.78,79.13 L60.07,80.85 L58.34,81.04 L56.75,80.28 L55.35,82.45 L53.98,82.66 L52.99,81.96 L51.33,83.35 L47.91,83.47 L47.08,82.97 L45.93,83.09 L44.29,81.86 L44.18,81.22 L43.17,81.02 L42.55,79.74 L42.10,79.78 L41.77,81.07 L40.38,81.29 L40.28,81.80 L38.11,81.72 L38.06,82.41 L37.32,82.77 L35.59,82.51 L34.05,80.01 L34.74,80.18 L34.49,79.08 L35.52,77.73 L36.83,77.68 L36.42,76.54 L37.16,76.23 L37.18,75.54 L37.70,76.02 L37.70,75.22 L37.97,75.63 L38.56,75.22 L37.94,75.01 L37.69,73.97 L38.25,73.95 L38.33,73.21 L39.13,72.83 L38.56,72.33 L41.48,69.51 L41.33,67.81 L40.58,67.73 L40.38,66.98 L41.24,66.65 L40.83,66.32 L41.46,66.40 L40.29,65.41 L41.08,65.23 L42.43,63.20 L43.58,62.51 L42.98,61.93 L43.78,61.68 L44.26,62.11 L44.48,61.35 L44.19,60.89 L42.17,61.72 L40.42,61.62 L37.52,62.37 L37.53,61.28 L40.17,59.97 L41.25,58.56 L42.68,57.98 L42.68,56.62 L42.07,55.87 L42.88,54.69 L41.64,53.20 L41.84,52.66 L39.74,52.24 L39.74,51.01 L37.61,50.19 L37.55,49.44 L36.97,49.64 L36.47,46.26 L35.92,45.99 L39.12,45.97 L39.46,45.60 L38.83,43.94 L41.20,42.50 L41.06,41.80 L41.71,41.32 L44.46,41.55 L45.17,39.02 L45.56,39.82 L46.95,39.71 L50.92,42.30 L52.36,42.52 L52.77,43.43 L54.54,44.00 L55.25,45.12 L55.90,45.13 L56.68,44.34 L57.12,42.49 L55.54,40.29 L56.02,38.52 L56.78,38.77 L57.64,38.07 L59.75,38.34Z M33.84,70.72 L33.70,70.04 L32.98,70.98 L30.63,70.49 L30.31,71.44 L29.68,71.55 L30.06,70.59 L28.89,69.65 L28.27,71.40 L29.17,71.26 L29.34,72.32 L28.64,74.00 L27.54,74.63 L27.66,73.43 L27.05,73.58 L26.39,75.17 L27.31,75.19 L26.58,75.83 L26.31,75.43 L25.26,76.97 L24.75,76.92 L24.95,78.00 L24.41,77.39 L24.25,78.68 L23.10,79.23 L22.54,78.62 L22.34,79.66 L21.96,79.13 L21.56,79.60 L21.24,79.35 L21.42,78.50 L22.01,78.35 L21.92,77.64 L21.14,77.50 L21.51,76.99 L20.43,77.43 L21.28,75.72 L22.42,75.01 L22.66,76.12 L22.53,75.11 L23.25,74.89 L23.66,75.99 L24.00,75.08 L22.99,74.47 L22.63,74.94 L22.41,74.40 L21.37,74.79 L20.75,73.83 L20.71,72.65 L23.15,67.26 L22.64,65.92 L21.98,65.59 L22.24,65.34 L22.81,65.29 L23.07,66.27 L25.65,64.80 L27.99,64.82 L28.77,67.91 L28.50,68.95 L31.60,67.45 L32.58,66.06 L34.87,65.79 L35.18,66.81 L36.08,65.78 L36.43,66.10 L37.55,65.54 L35.74,69.46 L36.23,69.58 L35.52,69.86 L35.57,71.14 L34.76,71.65 L34.24,71.38 L33.91,71.88 L33.74,70.83Z M11.69,16.97 L10.82,16.60 L10.96,16.04 L10.34,16.00 L10.80,15.28 L10.20,14.70 L9.63,15.56 L9.15,14.36 L10.62,14.69 L10.29,13.92 L9.60,13.85 L9.42,13.01 L9.97,13.02 L9.38,12.74 L9.75,12.46 L10.27,13.14 L10.76,12.81 L10.14,11.47 L11.22,10.42 L13.63,11.24 L13.34,12.54 L12.66,12.67 L14.56,13.49 L13.13,14.02 L14.52,14.57 L14.19,15.43 L12.35,15.54 L11.73,16.67Z M8.79,31.12 L8.73,30.78 L9.66,30.86 L10.15,29.58 L10.60,30.18 L10.01,31.10 L10.36,31.50 L11.01,31.16 L10.90,31.58 L11.65,31.72 L12.69,30.92 L13.57,31.44 L13.74,30.76 L14.27,30.83 L14.27,32.03 L13.19,34.10 L15.08,36.09 L14.85,37.41 L15.24,38.52 L17.66,39.64 L19.57,39.31 L19.99,41.28 L18.98,41.66 L18.84,42.36 L20.96,43.77 L21.60,45.05 L22.54,45.34 L23.69,46.68 L28.59,47.83 L28.53,49.01 L27.94,49.65 L25.37,50.82 L24.75,51.88 L25.70,51.32 L26.38,52.16 L26.00,52.67 L26.52,52.29 L28.02,52.71 L29.95,51.28 L31.70,51.12 L33.33,52.06 L34.68,55.28 L34.56,56.90 L33.54,58.16 L33.95,58.70 L33.51,59.67 L32.03,60.52 L30.56,60.48 L30.55,61.22 L29.62,62.14 L28.09,62.18 L28.41,62.57 L27.40,63.03 L27.35,61.77 L26.08,61.03 L25.94,58.96 L26.47,59.42 L27.50,58.81 L28.54,57.66 L28.75,56.31 L27.96,55.92 L28.27,55.13 L27.80,54.63 L24.47,54.60 L22.34,56.09 L19.78,56.01 L20.01,56.80 L18.92,58.19 L18.54,58.00 L17.83,60.15 L15.87,61.02 L15.71,61.99 L13.88,63.36 L13.96,63.81 L13.40,63.36 L12.49,63.92 L12.36,63.48 L13.84,62.53 L15.18,60.36 L15.27,59.15 L14.71,59.44 L14.36,58.76 L15.59,58.22 L15.29,58.70 L15.87,58.99 L17.05,56.42 L16.18,57.66 L16.00,57.34 L15.26,57.69 L15.61,56.71 L14.78,56.70 L15.07,56.08 L14.33,55.81 L14.65,55.36 L13.42,54.39 L13.71,53.62 L12.74,53.45 L12.42,54.15 L11.67,52.97 L11.21,53.10 L9.44,48.95 L9.01,49.47 L8.84,49.19 L8.60,46.97 L9.79,46.09 L9.27,44.63 L9.92,43.48 L10.40,43.53 L9.71,43.22 L10.37,42.85 L9.79,42.96 L10.30,42.04 L11.33,42.83 L11.44,42.46 L11.60,43.14 L12.12,42.99 L12.05,44.18 L12.83,43.62 L13.26,44.06 L12.26,45.41 L12.45,46.56 L13.42,46.15 L12.92,45.97 L13.33,45.23 L14.62,45.79 L15.32,46.76 L14.82,47.68 L15.21,48.36 L14.90,49.55 L14.62,48.64 L14.42,48.90 L14.54,48.01 L14.09,48.25 L14.36,49.65 L14.03,49.88 L14.21,50.26 L14.82,49.87 L14.95,50.44 L14.61,51.07 L14.26,50.85 L14.19,51.61 L15.15,51.76 L16.24,53.10 L16.41,51.87 L16.97,52.55 L17.39,50.98 L17.80,51.56 L17.95,51.07 L19.22,51.99 L19.82,51.77 L20.80,52.88 L21.83,52.46 L20.37,51.38 L20.53,50.70 L19.80,50.46 L19.99,50.04 L19.14,49.27 L19.04,47.40 L19.80,46.71 L19.65,45.52 L18.82,44.71 L17.11,43.42 L15.30,44.54 L15.36,43.80 L15.87,43.63 L14.56,43.37 L14.84,42.93 L14.41,42.65 L13.39,42.88 L13.52,41.92 L13.12,42.71 L13.94,43.57 L13.36,44.02 L13.08,43.39 L12.61,43.55 L12.84,42.96 L12.14,42.00 L12.96,41.96 L12.63,41.08 L13.22,41.40 L13.13,40.82 L13.68,40.88 L13.17,40.65 L13.40,40.19 L14.09,40.20 L13.02,40.01 L12.57,40.64 L12.21,40.46 L12.22,40.96 L11.84,40.44 L12.06,39.42 L11.17,39.36 L11.47,41.33 L10.10,41.21 L9.92,41.91 L9.67,40.63 L10.44,40.89 L11.05,40.22 L10.50,40.08 L10.19,39.18 L8.91,39.19 L9.65,38.42 L8.93,36.79 L8.56,38.31 L8.39,37.15 L8.13,37.71 L7.68,37.61 L8.15,36.84 L7.50,37.46 L7.54,37.10 L6.08,37.18 L6.04,36.55 L6.54,36.61 L6.13,35.95 L6.60,34.91 L7.33,34.67 L7.05,34.13 L7.87,33.20 L8.42,33.27 L7.12,33.46 L6.32,32.69 L6.80,32.37 L6.55,30.51 L7.56,30.35 L7.40,30.83 L8.24,30.55 L8.59,31.10Z M44.93,8.11 L45.24,7.36 L45.82,7.28 L47.53,7.92 L47.72,7.00 L48.29,6.93 L48.29,7.68 L47.65,7.94 L49.58,7.62 L49.86,8.74 L47.72,9.78 L47.39,9.37 L47.29,9.92 L48.37,9.92 L49.42,9.24 L49.32,9.96 L50.17,8.06 L51.32,7.68 L51.09,8.26 L51.74,8.13 L51.01,8.66 L51.86,8.24 L52.25,8.66 L51.55,9.06 L52.38,8.79 L52.04,9.29 L52.53,9.39 L53.87,8.59 L55.00,6.31 L56.98,6.28 L57.05,7.11 L56.35,7.84 L56.82,8.06 L55.87,8.87 L56.45,9.23 L55.66,10.24 L56.24,10.25 L56.06,10.91 L54.81,11.77 L55.13,12.63 L56.30,12.37 L55.68,13.66 L56.20,13.17 L56.01,14.12 L56.68,13.94 L56.42,15.09 L56.83,15.04 L57.68,17.52 L58.24,17.56 L59.55,20.31 L60.22,20.56 L60.76,20.00 L62.72,20.62 L62.29,21.84 L62.82,23.51 L62.07,24.25 L62.45,25.09 L60.55,25.34 L57.34,24.66 L55.40,25.20 L53.72,26.34 L53.72,27.18 L52.65,27.65 L52.33,30.39 L51.58,30.50 L50.56,31.90 L51.32,32.58 L51.64,33.99 L51.16,34.60 L51.69,35.04 L50.38,35.45 L50.24,36.28 L51.37,36.60 L50.60,37.36 L52.37,38.38 L51.19,41.58 L50.04,41.70 L48.35,40.96 L46.95,39.71 L45.56,39.82 L45.17,39.02 L44.46,41.55 L41.71,41.32 L41.06,41.80 L41.20,42.50 L38.83,43.94 L39.46,45.60 L39.12,45.97 L35.32,46.08 L36.21,45.61 L35.70,45.45 L36.42,44.64 L36.31,43.93 L35.77,42.47 L35.02,42.17 L35.33,41.64 L34.49,41.11 L34.55,40.34 L33.90,40.30 L33.33,37.70 L34.65,36.99 L34.47,36.05 L34.92,36.16 L35.14,35.35 L35.97,35.63 L36.54,34.01 L37.16,35.14 L37.79,34.17 L37.39,33.63 L38.46,33.19 L38.21,32.42 L38.85,32.63 L39.28,31.88 L40.16,31.93 L40.20,27.98 L38.81,27.71 L36.99,28.85 L36.76,29.53 L35.82,29.77 L35.97,29.13 L35.30,28.43 L33.92,28.17 L31.18,26.32 L23.13,26.76 L23.11,25.58 L25.03,24.77 L25.80,25.06 L26.18,24.54 L25.86,24.38 L26.85,23.90 L27.25,22.91 L25.59,23.48 L26.19,22.61 L25.69,22.34 L24.97,22.76 L24.64,21.97 L25.33,21.84 L25.26,21.43 L26.64,21.48 L27.11,20.96 L26.99,20.12 L28.48,19.60 L28.81,18.51 L29.74,19.24 L29.35,19.84 L29.59,20.60 L31.03,20.81 L31.04,22.01 L34.52,21.08 L34.95,21.53 L35.09,20.89 L35.42,21.27 L35.48,20.52 L35.95,20.54 L35.55,20.32 L35.69,19.54 L36.20,19.36 L35.61,19.13 L36.65,18.70 L36.46,17.68 L34.38,18.58 L33.93,19.49 L31.83,18.68 L31.62,17.71 L32.09,17.67 L32.74,18.79 L35.31,17.77 L37.77,14.95 L37.80,13.71 L37.19,13.64 L36.97,12.41 L37.98,12.26 L38.12,10.62 L39.51,10.53 L39.76,9.31 L41.15,9.26 L41.94,9.79 L43.62,9.48 L44.71,8.99 L44.38,8.50 L44.81,8.11Z M75.21,18.11 L75.76,17.70 L76.28,18.18 L76.63,17.46 L78.01,18.40 L78.39,17.89 L78.76,18.65 L79.40,18.46 L80.33,19.60 L82.02,22.89 L81.63,25.61 L81.96,26.88 L81.50,26.99 L80.72,29.26 L79.23,29.16 L79.67,28.85 L79.12,28.60 L78.12,28.74 L78.85,30.20 L77.03,30.76 L76.89,31.74 L75.45,31.64 L75.00,30.89 L73.65,31.19 L74.07,34.99 L76.76,35.95 L78.24,34.86 L79.22,34.79 L79.65,35.34 L79.46,34.75 L80.06,35.09 L79.94,34.56 L80.31,34.56 L80.29,35.02 L80.78,34.75 L81.05,35.36 L81.26,35.09 L82.65,36.17 L82.51,35.67 L83.15,35.98 L83.35,35.64 L83.09,36.13 L86.04,35.53 L86.61,35.81 L86.42,35.42 L87.64,35.02 L86.59,36.34 L86.47,37.74 L85.28,38.58 L85.07,39.89 L84.03,40.85 L85.65,41.35 L87.57,40.55 L88.10,40.94 L85.93,42.43 L86.29,42.99 L87.93,42.71 L87.99,43.36 L88.54,43.34 L88.57,42.32 L89.00,42.11 L89.04,43.20 L89.84,43.09 L90.12,43.54 L91.10,42.12 L90.88,42.76 L91.58,43.70 L90.25,44.18 L88.59,43.94 L87.67,46.44 L87.52,45.86 L87.20,46.45 L89.62,48.35 L89.65,47.76 L89.91,48.06 L90.15,47.61 L90.40,48.62 L91.15,47.81 L91.16,48.91 L92.21,48.61 L92.18,48.02 L93.55,48.28 L94.00,48.89 L92.94,48.60 L92.60,49.13 L92.01,48.76 L91.35,49.25 L91.34,50.00 L90.26,49.30 L90.58,50.72 L90.87,50.28 L91.57,50.64 L89.67,52.46 L89.30,52.09 L89.53,52.65 L89.05,52.90 L89.56,52.86 L89.77,53.60 L89.78,52.78 L90.37,53.36 L90.17,52.55 L90.51,52.48 L91.33,53.20 L90.06,54.72 L89.48,54.07 L88.84,54.99 L88.26,54.36 L88.26,54.97 L87.83,54.63 L87.66,54.99 L87.22,54.18 L87.43,55.82 L86.68,54.76 L86.59,56.35 L87.07,56.62 L86.61,56.84 L85.75,57.02 L85.63,56.58 L86.12,53.49 L84.94,53.15 L83.87,53.47 L82.98,52.78 L81.92,53.02 L80.91,55.55 L76.87,55.40 L75.99,56.27 L74.14,55.65 L74.27,54.36 L72.80,52.84 L70.92,53.89 L68.79,54.22 L68.11,53.01 L65.46,51.11 L64.83,47.82 L65.45,47.09 L64.20,45.65 L63.77,43.83 L62.35,42.65 L61.86,40.28 L59.75,38.34 L57.64,38.07 L56.78,38.77 L56.02,38.52 L55.54,40.29 L57.12,42.49 L56.68,44.34 L55.90,45.13 L55.25,45.12 L54.54,44.00 L52.77,43.43 L52.36,42.52 L50.73,41.92 L51.47,41.21 L52.37,38.38 L50.60,37.36 L51.37,36.60 L50.24,36.28 L50.38,35.45 L51.69,35.04 L51.16,34.60 L51.64,33.99 L51.32,32.58 L50.56,31.90 L51.58,30.50 L52.33,30.39 L52.65,27.65 L53.72,27.18 L53.72,26.34 L55.40,25.20 L57.34,24.66 L60.55,25.34 L62.45,25.09 L62.07,24.25 L62.82,23.51 L62.29,21.84 L62.72,20.62 L64.31,21.22 L64.81,20.83 L66.33,22.18 L71.26,22.37 L71.02,21.63 L72.35,20.50 L72.59,20.79 L72.98,19.57 L73.82,18.95 L73.62,18.40 L74.69,18.25 L74.44,17.81 L75.16,18.12Z M27.05,83.75 L25.41,82.26 L25.56,80.99 L24.70,80.02 L25.80,79.19 L25.18,79.02 L25.26,78.59 L26.33,78.63 L26.99,79.39 L26.59,78.50 L26.90,78.03 L27.22,78.68 L27.62,77.99 L28.50,79.30 L28.04,79.58 L27.98,80.67 L28.63,80.45 L28.81,81.03 L27.51,81.92 L27.71,82.59 L27.11,83.70Z M42.10,79.78 L42.76,79.76 L43.17,81.02 L44.18,81.22 L44.29,81.86 L46.57,83.30 L45.98,85.06 L48.58,86.89 L49.35,89.56 L51.65,90.24 L52.75,92.15 L53.29,92.19 L51.96,93.96 L52.01,95.10 L53.36,95.55 L53.92,96.34 L55.85,96.60 L55.52,97.67 L56.81,97.87 L57.19,101.27 L58.16,102.61 L59.03,101.54 L60.75,102.92 L62.02,102.39 L62.84,103.04 L63.39,104.90 L62.86,105.77 L63.21,107.55 L62.19,108.15 L61.86,109.73 L60.10,109.14 L58.25,110.56 L56.96,112.64 L56.91,114.08 L60.05,115.14 L59.91,115.93 L58.85,116.77 L59.04,117.56 L60.55,116.97 L60.71,117.44 L58.60,119.39 L56.88,119.40 L56.39,121.00 L55.77,121.39 L56.12,121.82 L55.38,121.92 L55.55,122.52 L54.92,123.15 L51.86,124.90 L49.81,125.15 L47.97,126.55 L47.52,126.32 L46.48,126.96 L46.45,127.73 L45.28,127.84 L45.24,128.69 L44.80,128.47 L44.52,129.07 L45.12,126.64 L44.25,125.95 L46.97,123.97 L47.52,123.04 L48.17,121.40 L47.73,120.13 L48.99,118.35 L49.43,114.91 L47.86,111.40 L45.81,109.68 L45.80,105.86 L45.18,106.32 L45.04,105.96 L43.67,106.25 L42.08,104.57 L43.35,103.14 L45.09,102.80 L46.43,103.89 L46.55,105.59 L46.09,105.79 L48.12,105.57 L50.13,101.69 L49.15,99.80 L47.18,99.59 L46.89,98.85 L46.69,99.14 L45.43,98.43 L43.37,99.33 L42.72,100.59 L43.04,101.67 L41.05,104.19 L41.37,104.70 L40.95,106.23 L40.56,106.12 L40.25,107.23 L39.88,107.18 L40.06,107.86 L39.55,108.01 L40.08,108.11 L39.99,108.81 L39.41,108.40 L39.36,109.07 L40.04,109.39 L39.35,109.66 L39.79,111.72 L40.26,112.67 L40.62,112.44 L40.92,112.88 L40.37,112.88 L41.39,115.85 L43.17,117.43 L44.73,117.79 L44.10,118.83 L44.32,119.82 L43.46,120.08 L43.36,120.42 L43.97,120.46 L43.78,120.91 L42.20,121.44 L41.94,122.38 L40.83,121.46 L39.62,122.00 L39.14,121.48 L39.20,120.01 L37.63,118.49 L33.84,118.48 L32.24,117.80 L31.77,118.09 L31.67,117.70 L31.19,118.63 L29.79,118.12 L29.01,118.52 L29.49,117.75 L29.00,117.51 L29.51,117.22 L28.96,116.84 L28.55,117.16 L28.48,116.54 L29.19,116.47 L29.32,115.99 L27.58,115.45 L28.83,114.48 L26.10,111.81 L25.24,111.79 L25.50,111.32 L26.27,111.75 L27.05,110.64 L27.45,111.46 L28.08,111.87 L28.24,111.09 L28.20,111.88 L29.37,112.34 L31.00,111.21 L32.41,108.54 L33.09,105.86 L32.50,101.60 L31.91,101.45 L31.08,99.63 L30.35,99.49 L30.68,99.27 L30.32,98.59 L28.95,97.59 L28.01,97.86 L27.33,95.99 L29.32,91.13 L28.52,88.04 L27.57,87.81 L28.72,85.07 L28.25,84.00 L27.93,84.50 L27.53,84.25 L27.63,83.14 L29.32,82.17 L30.69,82.55 L30.80,82.15 L31.45,82.97 L32.27,83.00 L33.78,81.85 L34.08,80.52 L35.59,82.51 L37.32,82.77 L38.06,82.41 L38.11,81.72 L40.28,81.80 L40.38,81.29 L41.77,81.07 L42.16,79.84Z M17.09,95.71 L17.11,94.88 L16.58,94.85 L16.88,94.38 L16.18,94.50 L16.05,93.69 L16.85,93.30 L16.24,93.45 L16.07,92.86 L15.83,94.17 L15.32,93.93 L15.20,93.20 L15.82,92.34 L16.72,92.49 L18.42,93.97 L18.73,93.61 L18.35,92.85 L19.17,93.05 L18.76,94.07 L19.15,94.23 L19.02,94.85 L18.21,94.71 L17.11,95.68Z M11.59,103.12 L11.34,102.49 L10.74,103.12 L9.93,102.59 L9.65,101.59 L10.49,101.39 L10.71,99.75 L11.37,98.92 L13.70,98.20 L14.11,96.14 L14.73,96.47 L14.35,96.68 L14.61,97.32 L13.84,98.04 L13.53,99.32 L12.91,99.14 L12.45,99.69 L12.62,100.42 L11.98,101.12 L12.43,101.73 L11.67,102.81Z M73.95,55.45 L75.99,56.27 L76.87,55.40 L80.91,55.55 L81.92,53.02 L82.98,52.78 L83.87,53.47 L84.94,53.15 L86.12,53.49 L85.75,57.02 L87.07,56.62 L86.15,57.14 L86.35,57.84 L85.82,57.72 L85.86,58.79 L85.01,58.25 L83.77,60.04 L83.35,59.58 L82.84,60.92 L82.38,60.76 L83.15,61.24 L82.50,62.58 L80.92,63.20 L80.40,63.98 L80.11,66.43 L81.10,65.97 L80.98,66.69 L81.60,67.09 L80.43,68.06 L79.19,67.50 L79.10,68.98 L78.60,69.32 L79.36,68.89 L79.61,69.38 L79.72,68.69 L79.86,69.68 L79.04,69.80 L80.22,69.99 L78.62,70.63 L77.92,72.57 L78.11,73.28 L77.54,73.47 L76.57,75.60 L72.41,91.03 L73.05,90.78 L72.36,91.32 L72.08,94.99 L73.25,96.33 L72.21,99.49 L72.57,100.44 L71.93,100.71 L72.59,102.14 L70.58,104.32 L70.61,105.26 L70.22,104.77 L70.06,105.77 L69.56,105.86 L69.67,107.71 L69.23,107.42 L69.25,107.86 L69.80,108.78 L68.88,109.39 L69.19,111.01 L67.84,112.48 L68.43,113.45 L68.01,113.91 L67.04,112.68 L65.17,113.10 L64.51,112.10 L64.69,111.18 L64.23,111.29 L63.38,110.07 L61.88,109.81 L62.19,108.15 L63.21,107.55 L62.86,105.77 L63.39,104.90 L62.84,103.04 L62.02,102.39 L60.31,102.77 L59.03,101.54 L58.16,102.61 L57.19,101.27 L56.81,97.87 L55.52,97.67 L55.85,96.60 L53.92,96.34 L53.36,95.55 L52.01,95.10 L51.96,93.96 L53.29,92.19 L52.75,92.15 L51.65,90.24 L49.35,89.56 L48.58,86.89 L45.99,85.09 L46.01,84.22 L47.08,82.97 L47.34,83.40 L50.07,83.54 L50.71,83.05 L51.33,83.35 L52.99,81.96 L53.98,82.66 L55.35,82.45 L56.75,80.28 L58.34,81.04 L60.07,80.85 L59.78,79.13 L59.19,78.90 L58.77,77.67 L57.76,77.12 L58.06,75.62 L59.02,75.83 L60.15,73.88 L58.87,72.68 L58.62,70.61 L57.78,70.55 L56.97,69.29 L56.53,67.09 L56.65,66.14 L57.18,65.92 L56.96,64.75 L57.67,64.45 L58.06,63.20 L60.04,63.35 L60.35,60.88 L61.28,59.50 L62.38,59.65 L62.53,58.05 L64.45,56.68 L64.81,55.56 L64.46,55.16 L65.52,53.29 L68.11,53.01 L69.01,54.23 L70.92,53.89 L72.80,52.84 L74.27,54.36 L73.98,55.37Z";

// ── RouteMap — animated multi-city route on the Overview screen ─────────
function RouteMap({ route, onJump }) {
  const { x } = useT();
  const ref = useInView();
  // draw the route as a clean closed loop: order stops by angle around their centroid (no crossings)
  const cx = route.reduce((a, s) => a + s.mx, 0) / route.length;
  const cy = route.reduce((a, s) => a + s.my, 0) / route.length;
  const ring = route.slice().sort((a, b) => Math.atan2(a.my - cy, a.mx - cx) - Math.atan2(b.my - cy, b.mx - cx));
  const startAt = Math.max(0, ring.findIndex((s) => s.day === 0));
  const loop = ring.slice(startAt).concat(ring.slice(0, startAt));
  const d = loop.map((s, i) => (i === 0 ? 'M' : 'L') + s.mx + ',' + (s.my * 1.35).toFixed(2)).join(' ') + ' Z';
  return (
    <div className="jmap" ref={ref}>
      <div className="jmap-base">
        <svg className="jmap-geo" viewBox="0 0 100 135.1" preserveAspectRatio="none" aria-hidden="true">
          <path className="jmap-land" d={KYUSHU_GEO} />
        </svg>
        <span className="jmap-veil" aria-hidden="true"></span>
      </div>
      <svg className="jmap-svg" viewBox="0 0 100 135" preserveAspectRatio="none" aria-hidden="true">
        <path id="jmapRoute" className="jmap-path" d={d} pathLength="100" fill="none" />
        <circle className="jmap-comet" r="1.7">
          <animateMotion dur="6.5s" repeatCount="indefinite" calcMode="linear" rotate="0">
            <mpath href="#jmapRoute" />
          </animateMotion>
        </circle>
      </svg>
      {route.map((s, i) => (
        <button className={'jmap-node' + (s.day === 0 ? ' is-start' : '')} key={i} style={{ left: s.mx + '%', top: s.my + '%', '--i': i }}
          onClick={() => onJump(s.day)} aria-label={x(s.city)}>
          {s.day === 0 ? <span className="jmap-flag">{x({ en: 'Start \u00b7 End', th: '\u0e40\u0e23\u0e34\u0e48\u0e21 \u00b7 \u0e08\u0e1a' })}</span> : null}
          <span className="jmap-pin" aria-hidden="true"></span>
          <span className="jmap-label">
            <span className="jmap-city">{x(s.city)}</span>
            <span className="jmap-days">{x(s.days)}</span>
          </span>
        </button>
      ))}
    </div>
  );
}

// ── Travelers — the party grid ──────────────────────────────────────────
function Travelers({ data }) {
  const { x } = useT();
  const ref = useInView();
  const telHref = (p) => 'tel:' + p.replace(/[^+\d]/g, '');
  return (
    <section className="party" ref={ref}>
      <div className="party-head">
        <span className="ov-kicker">{x(data.subtitle)}</span>
        <h2 className="ov-h2">{x(data.title)}</h2>
      </div>
      <div className="party-grid">
        {data.people.map((p, i) => (
          <article className="trav" key={i} style={{ '--i': i }}>
            <div className="trav-photo"><ImageFrame id={p.imageId} placeholder={x(p.name)} ratio="1 / 1" /></div>
            <div className="trav-body">
              <h3 className="trav-name">{x(p.name)}</h3>
              <span className="trav-role">{x(p.role)}</span>
              <div className="trav-meta">
                <span className="trav-meta-row"><Icon name="pin" size={13} stroke={1.4} /> {x(p.home)}</span>
                <span className="trav-meta-row"><Icon name="ticket" size={13} stroke={1.4} /> {x(p.detail)}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ── Emergency — contacts panel ──────────────────────────────────────────
function Emergency({ data }) {
  const { x } = useT();
  const ref = useInView();
  const telHref = (v) => 'tel:' + v.replace(/[^+\d]/g, '');
  return (
    <section className="party emergency" ref={ref}>
      <div className="party-head">
        <span className="ov-kicker ov-kicker-alert">{x(data.subtitle)}</span>
        <h2 className="ov-h2">{x(data.title)}</h2>
      </div>
      <div className="emg-grid">
        {data.items.map((it, i) => (
          <a className={'emg' + (it.urgent ? ' emg-urgent' : '')} key={i} style={{ '--i': i }} href={telHref(it.value)}>
            <span className="emg-ic"><Icon name={it.icon} size={17} stroke={1.4} /></span>
            <span className="emg-text">
              <span className="emg-label">{x(it.label)}</span>
              <span className="emg-value mono">{it.value}</span>
            </span>
            <span className="emg-go"><Icon name="phone" size={14} stroke={1.5} /></span>
          </a>
        ))}
      </div>
    </section>
  );
}

// ── Budget — estimated spend, per person, in THB ────────────────────────
function Budget({ data }) {
  const { x } = useT();
  const ref = useInView();
  const max = Math.max(...data.items.map((i) => i.amount));
  const fmt = (n) => data.currency + n.toLocaleString('en-US');
  return (
    <section className="party budget" ref={ref}>
      <div className="party-head">
        <span className="ov-kicker">{x(data.subtitle)}</span>
        <h2 className="ov-h2">{x(data.title)}</h2>
      </div>
      <div className="bud-list">
        {data.items.map((it, i) => (
          <div className="bud-row" key={i} style={{ '--i': i, '--p': (it.amount / max) }}>
            <span className="bud-label">{x(it.label)}</span>
            <span className="bud-bar" aria-hidden="true"><span className="bud-fill"></span></span>
            <span className="bud-amt mono">{fmt(it.amount)}</span>
          </div>
        ))}
      </div>
      <div className="bud-total">
        <span className="bud-total-k">{x({ en: 'Total per person', th: 'รวมต่อคน' })}</span>
        <span className="bud-total-v mono">{fmt(data.total)}</span>
      </div>
      <p className="bud-note">{x(data.note)}</p>
    </section>
  );
}

// ── Overview — animated destination presentation + route + travelers ────
// ── InstallTip — PWA install guide (browser only; hidden in standalone/PWA mode) ──
function InstallTip() {
  const { x } = useT();
  const [bip, setBip] = React.useState(typeof window !== 'undefined' ? window.__bip : null);
  const [off, setOff] = React.useState(function () { try { return localStorage.getItem('wwn-install-tip') === 'off'; } catch (e) { return false; } });
  const [open, setOpen] = React.useState(false);
  React.useEffect(function () {
    const onReady = function () { setBip(window.__bip); };
    window.addEventListener('bip-ready', onReady);
    return function () { window.removeEventListener('bip-ready', onReady); };
  }, []);
  const standalone = (typeof window !== 'undefined') && ((window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true);
  if (standalone || off) return null;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent || '');
  const dismiss = function () { setOff(true); try { localStorage.setItem('wwn-install-tip', 'off'); } catch (e) {} };
  const install = function () {
    const p = window.__bip; if (!p) return;
    p.prompt(); if (p.userChoice) p.userChoice.then(function () {});
    window.__bip = null; setBip(null); dismiss();
  };
  const IOS_STEPS = [
    { en: 'Open this page in Safari', th: 'เปิดหน้านี้ใน Safari' },
    { en: 'Tap the Share icon (a square with an up arrow) on the bottom bar', th: 'กดปุ่มแชร์ (ไอคอนสี่เหลี่ยมมีลูกศรขึ้น) ที่แถบล่าง' },
    { en: 'Scroll down and choose “Add to Home Screen”', th: 'เลื่อนลง แล้วเลือก “เพิ่มไปยังหน้าจอโฮม”' },
    { en: 'Tap “Add” — the WWN icon appears on your home screen', th: 'กด “เพิ่ม” → ได้ไอคอน WWN บนหน้าจอโฮม' },
  ];
  const ANDROID_STEPS = [
    { en: 'Open this page in Chrome', th: 'เปิดหน้านี้ใน Chrome' },
    { en: 'Tap the ⋮ menu (three dots, top-right)', th: 'กดเมนู ⋮ (จุดสามจุด มุมขวาบน)' },
    { en: 'Choose “Install app” / “Add to Home screen”', th: 'เลือก “ติดตั้งแอป” หรือ “เพิ่มลงในหน้าจอหลัก”' },
    { en: 'Confirm — the WWN icon appears on your home screen', th: 'กดยืนยัน → ได้ไอคอน WWN บนหน้าจอโฮม' },
  ];
  const text = bip
    ? x({ en: 'Open it offline anytime on the trip — no internet needed.', th: 'เปิดได้ทุกที่บนทริป ไม่ต้องมีเน็ต' })
    : isIOS
      ? x({ en: 'In Safari: tap Share, then "Add to Home Screen".', th: 'ใน Safari: กดปุ่มแชร์ แล้วเลือก "เพิ่มไปยังหน้าจอโฮม"' })
      : x({ en: 'From the browser menu, choose "Add to Home Screen / Install".', th: 'จากเมนูเบราว์เซอร์ เลือก "เพิ่มลงหน้าจอโฮม / ติดตั้ง"' });
  return (
    <div className="install-tip-wrap">
      <div className="install-tip" role="note">
        <span className="install-tip-ic"><Icon name="arrowUpRight" size={16} stroke={1.6} /></span>
        <div className="install-tip-body">
          <span className="install-tip-title">{x({ en: 'Install this app · works offline', th: 'ติดตั้งเป็นแอป · เปิดออฟไลน์ได้' })}</span>
          <span className="install-tip-text">{text}</span>
        </div>
        {bip ? <button className="install-tip-btn" onClick={install}>{x({ en: 'Install', th: 'ติดตั้ง' })}</button> : null}
        <button className="install-tip-x" onClick={dismiss} aria-label="Dismiss"><Icon name="close" size={15} stroke={1.5} /></button>
      </div>
      <button className="install-tip-more" onClick={function () { setOpen(!open); }} aria-expanded={open}>
        <Icon name={open ? 'chevronDown' : 'chevronRight'} size={14} stroke={1.7} />
        {x(open ? { en: 'Hide steps', th: 'ซ่อนวิธีติดตั้ง' } : { en: 'How to install — step by step (iOS / Android)', th: 'ดูวิธีติดตั้งทีละขั้น (iOS / Android)' })}
      </button>
      {open ? ReactDOM.createPortal(
        <div className="install-overlay" onClick={function () { setOpen(false); }}>
          <div className="install-howto" onClick={function (e) { e.stopPropagation(); }}>
            <div className="install-howto-bar">
              <span className="install-howto-title">{x({ en: 'How to install', th: 'วิธีติดตั้ง' })}</span>
              <button className="install-howto-close" onClick={function () { setOpen(false); }} aria-label="Close"><Icon name="close" size={16} stroke={1.5} /></button>
            </div>
            <div className="install-howto-grid">
              <div className="install-os">
                <span className="install-os-head"><Icon name="phone" size={13} stroke={1.5} /> iOS · Safari</span>
                <ol>{IOS_STEPS.map(function (s, i) { return <li key={i}>{x(s)}</li>; })}</ol>
              </div>
              <div className="install-os">
                <span className="install-os-head"><Icon name="phone" size={13} stroke={1.5} /> Android · Chrome</span>
                <ol>{ANDROID_STEPS.map(function (s, i) { return <li key={i}>{x(s)}</li>; })}</ol>
              </div>
              <span className="install-howto-note"><Icon name="cloud" size={13} stroke={1.5} /> {x({ en: 'Once installed it opens fully offline — just open it online once first so everything caches.', th: 'ติดตั้งแล้วเปิดได้แม้ไม่มีเน็ต · เปิดออนไลน์ครั้งแรกสัก 1 รอบให้โหลดครบก่อน' })}</span>
            </div>
          </div>
        </div>,
        document.querySelector('.lookbook') || document.body
      ) : null}
    </div>
  );
}

function Overview({ trip, dest, travelers, onBegin, onJump, onHome, onBookings, onPhrases, onParty, onEmergency, lang, onLang }) {
  const { x } = useT();
  const heroRef = useInView();
  return (
    <div className="overview">
      <header className="chrome chrome-min">
        <button className="chrome-home" onClick={onHome}>
          <Icon name="feather" size={16} stroke={1.3} />
          <span className="wwn"><b>WWN</b> <span className="wwn-full">World Wide Nick</span></span>
        </button>
        <div className="chrome-bar-r">
          <button className="chrome-sos" onClick={onEmergency}>
            <Icon name="alert" size={15} stroke={1.5} />
            <span>{x({ en: 'Emergency', th: 'ฉุกเฉิน' })}</span>
          </button>
          <button className="chrome-nav" onClick={onBookings}>
            <Icon name="book" size={15} stroke={1.4} />
            <span>{x({ en: 'Bookings', th: 'การจอง' })}</span>
          </button>
          <button className="chrome-nav" onClick={onParty}>
            <Icon name="passport" size={15} stroke={1.4} />
            <span>{x({ en: 'Party', th: 'ทีมงาน' })}</span>
          </button>
          <button className="chrome-nav" onClick={onPhrases}>
            <Icon name="note" size={15} stroke={1.4} />
            <span>{x({ en: 'Phrases', th: 'ประโยคใช้บ่อย' })}</span>
          </button>
          <Clock variant="chrome" />        </div>
      </header>

      <main className="ov-stage">
        <InstallTip />
        <section className="ov-hero" ref={heroRef}>
          <ImageFrame id={trip.coverId} placeholder={x({ en: 'Cover photo', th: 'รูปปก' })} ratio="" className="ov-hero-bg" />
          <span className="ov-hero-scrim" aria-hidden="true"></span>
          <span className="ov-native" aria-hidden="true">{dest.islandNative}</span>
          <span className="ov-kicker">{x(trip.meta)}</span>
          <h1 className="ov-country">{x(dest.island)}</h1>
          <p className="ov-country-sub">{x(dest.country)} · {dest.native} · {x(trip.subtitle)}</p>
          <p className="ov-tagline">{x(dest.tagline)}</p>
          <div className="ov-facts">
            {dest.facts.map((f, i) => (
              <div className="ov-fact" key={i} style={{ '--i': i }}>
                <span className="ov-fact-k">{x(f.k)}</span>
                <span className="ov-fact-v">{x(f.v)}</span>
              </div>
            ))}
          </div>
          <Clock variant="panel" />
          <OvEssentials data={window.ESSENTIALS} />
        </section>

        <section className="ov-route-sec">
          <div className="ov-route-head">
            <span className="ov-kicker">{x({ en: 'The Route', th: 'เส้นทาง' })}</span>
            <h2 className="ov-h2">{x({ en: 'One winter loop around Kyushu', th: 'วนเกาะคิวชู หนึ่งฤดูหนาว' })}</h2>
          </div>
          <RouteMap route={dest.route} onJump={onJump} />
        </section>

        <Budget data={window.BUDGET} />
        <Packing data={window.PACKING} />

        <div className="ov-credit">
          <span className="ov-credit-rule" aria-hidden="true"></span>
          <span className="ov-credit-text">{x(window.CREDIT)}</span>
        </div>
      </main>

      <button className="ov-begin-float" onClick={onBegin}>
        <span>{x({ en: 'Begin the journey', th: 'เริ่มการเดินทาง' })}</span>
        <span className="ov-begin-float-i"><Icon name="arrowRight" size={16} stroke={1.6} /></span>
      </button>
    </div>
  );
}

// ── DayNav ─────────────────────────────────────────────────────────────
function DayNav({ days, current, onSelect, onHome, onBookings, onPhrases, onParty, onEmergency, lang, onLang }) {
  const { x } = useT();
  const railRef = useRef(null);
  // keep the active day chip in view as days change
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const active = rail.querySelector('.chrome-day.active');
    if (active) {
      const target = active.offsetLeft - rail.clientWidth / 2 + active.clientWidth / 2;
      rail.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
    }
  }, [current]);
  // short date for each chip, e.g. "14 Nov" — derived from the localized date string
  const shortDate = (d) => {
    const s = x(d.date);
    const m = s.match(/(\d{1,2})\s+([^\s·]+)/);
    return m ? m[1] + ' ' + m[2].slice(0, 3) : '';
  };

  return (
    <header className="chrome chrome-stack">
      <div className="chrome-bar">
        <button className="chrome-home" onClick={onHome}>
          <Icon name="feather" size={16} stroke={1.3} />
          <span className="wwn"><b>WWN</b> <span className="wwn-full">World Wide Nick</span></span>
        </button>
        <div className="chrome-now">
          <span className="chrome-now-day">{lang === 'th' ? days[current].labelTh : days[current].label}</span>
          <span className="chrome-now-sep" aria-hidden="true"></span>
          <span className="chrome-now-date">{x(days[current].date)}</span>
        </div>
        <div className="chrome-bar-r">
          <button className="chrome-sos" onClick={onEmergency}>
            <Icon name="alert" size={15} stroke={1.5} />
            <span>{x({ en: 'Emergency', th: 'ฉุกเฉิน' })}</span>
          </button>
          <button className="chrome-nav" onClick={onBookings}>
            <Icon name="book" size={15} stroke={1.4} />
            <span>{x({ en: 'Bookings', th: 'การจอง' })}</span>
          </button>
          <button className="chrome-nav" onClick={onParty}>
            <Icon name="passport" size={15} stroke={1.4} />
            <span>{x({ en: 'Party', th: 'ทีมงาน' })}</span>
          </button>
          <button className="chrome-nav" onClick={onPhrases}>
            <Icon name="note" size={15} stroke={1.4} />
            <span>{x({ en: 'Phrases', th: 'ประโยคใช้บ่อย' })}</span>
          </button>
          <Clock variant="chrome" />        </div>
      </div>

      <nav className="chrome-days" ref={railRef}>
        {days.map((d, i) => (
          <button
            key={d.label}
            className={'chrome-day' + (i === current ? ' active' : '')}
            onClick={() => onSelect(i)}
          >
            <span className="chrome-day-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="chrome-day-info">
              <span className="chrome-day-name">{x(d.title)}</span>
              <span className="chrome-day-date">{shortDate(d)}</span>
            </span>
          </button>
        ))}
      </nav>
    </header>
  );
}

// ── ActivityDetail ─────────────────────────────────────────────────────
function ActivityDetail({ a, onClose }) {
  const { x, r } = useT();
  const [dish, setDish] = useState(null);
  const [closing, setClosing] = useState(false);
  const close = () => { if (closing) return; setClosing(true); setTimeout(onClose, 380); };
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);
  useEffect(() => {
    const onKey = (e) => { if (e.key !== 'Escape') return; if (dish) setDish(null); else close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, dish]);

  if (!a) return null;
  const menu = window.MENUS && window.MENUS[a.imageId];
      const isFood = (a.kind === 'Dining' || a.kind === 'Coffee' || a.kind === 'Sweets') && !(menu && menu.items && menu.items.some(it => it.map));
  return (
    <div className={'detail-scrim' + (closing ? ' closing' : '')} onClick={close}>
      <aside className="detail" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={close} aria-label="Close">
          <Icon name="close" size={18} stroke={1.3} />
        </button>

        <div className="detail-media">
          <ImageFrame id={a.imageId} placeholder={x(a.title)} ratio="" className="detail-img" kicker={r(a.kind)} />
        </div>

        <div className="detail-body">
          <span className="detail-time"><Icon name="clock" size={15} stroke={1.3} /> {a.time} · {r(a.meridiem)}</span>
          <h2 className="detail-title">{x(a.title)}</h2>
          <p className="detail-place">{x(a.place)}</p>
          <p className="detail-blurb">{x(a.blurb)}</p>

          {menu ? (
            <div className="detail-menu">
              <div className="detail-dock-head">
                <span className="detail-dock-line" aria-hidden="true"></span>
                <span className="detail-dock-label">{x(isFood ? (a.kind === 'Sweets' ? { en: 'Sweet menu', th: 'เมนูของหวาน' } : { en: 'Recommended dishes', th: 'เมนูแนะนำ' }) : a.kind === 'Nightlife' ? { en: 'Bars & drinks', th: 'บาร์ & เครื่องดื่ม' } : a.kind === 'Run' ? { en: 'The route', th: 'เส้นทางวิ่ง' } : { en: 'Spots & shops', th: 'สถานที่ & ร้านแนะนำ' })}</span>
              </div>
              <ul className={'menu-list' + (a.kind === 'Run' ? ' route-list' : '')}>
                {menu.items.map((m, i) => (
                  <li key={i}>
                    <button className={'menu-item' + (m.signature ? ' is-sig' : '')}
                      onClick={() => m.map ? window.open(m.map, '_blank', 'noopener,noreferrer') : setDish({ name: m.name, note: m.note, signature: m.signature, isFood: isFood, slotId: 'dish-' + a.imageId + '-' + i })}>
                      <span className="menu-bullet"><Icon name={isFood ? 'bowl' : 'pin'} size={14} stroke={1.4} /></span>
                      <span className="menu-text">
                        <span className="menu-name">
                          {x(m.name)}
                          {m.signature ? <span className="menu-tag">{x(isFood ? { en: 'Signature', th: 'เมนูเด่น' } : { en: 'Top pick', th: 'แนะนำ' })}</span> : null}
                        </span>
                        {m.note ? <span className="menu-note">{x(m.note)}</span> : null}
                        {a.kind === 'Run' ? <ImageFrame id={'dish-' + a.imageId + '-' + i} placeholder={x(m.name)} ratio="1 / 1" className="menu-thumb" /> : null}
                      </span>
                      <span className="menu-go"><Icon name={m.map ? 'map' : 'image'} size={16} stroke={1.4} /></span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="detail-dock-head">
            <span className="detail-dock-line" aria-hidden="true"></span>
            <span className="detail-dock-label">{x({ en: 'References & bookings', th: 'ข้อมูลอ้างอิงและการจอง' })}</span>
          </div>
          <ReferenceDock refs={a.refs} variant="expanded" />
        </div>
      </aside>

      {dish ? (
        <div className="dish-scrim" onClick={(e) => { e.stopPropagation(); setDish(null); }}>
          <div className="dish-box" onClick={(e) => e.stopPropagation()}>
            <button className="dish-close" onClick={() => setDish(null)} aria-label="Close"><Icon name="close" size={18} stroke={1.3} /></button>
            <ImageFrame id={dish.slotId} placeholder={x(dish.name)} ratio="4 / 3" className="dish-img" />
            <div className="dish-meta">
              <span className="dish-name">
                {x(dish.name)}
                {dish.signature ? <span className="menu-tag">{x(dish.isFood ? { en: 'Signature', th: 'เมนูเด่น' } : { en: 'Top pick', th: 'แนะนำ' })}</span> : null}
              </span>
              {dish.note ? <span className="dish-note">{x(dish.note)}</span> : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

// ── Bookings — consolidated reservations + ticket checklist ─────────────
const BK_CATS = [
  { key: 'flight',  icon: 'plane', label: { en: 'Flights',        th: 'เที่ยวบิน' } },
  { key: 'stay',    icon: 'bed',   label: { en: 'Stays',          th: 'ที่พัก' } },
  { key: 'transit', icon: 'train', label: { en: 'Rail & Transit', th: 'รถไฟและการเดินทาง' } },
  { key: 'dining',  icon: 'bowl',  label: { en: 'Dining',         th: 'ร้านอาหาร' } },
];

function bkCategory(a) {
  const k = (a.kind || '').toLowerCase();
  if (k === 'flight' || k === 'departure' || a.icon === 'plane') return 'flight';
  if (k === 'check-in' || k === 'onsen') return 'stay';
  if (['train', 'shinkansen', 'journey', 'ferry', 'bus', 'transfer'].includes(k) || a.icon === 'train' || a.icon === 'car') return 'transit';
  if (['dining', 'coffee'].includes(k)) return 'dining';
  return 'entry';
}

function bkShortDate(dateObj, lang) {
  const s = window.tx(dateObj, lang);
  const m = s.match(/(\d{1,2})\s+([^\s·]+)/);
  return m ? m[1] + ' ' + m[2].slice(0, 3) : '';
}

function collectBookings(trip) {
  const reservations = [];
  const passes = [];
  trip.days.forEach((d, di) => {
    d.activities.forEach((a) => {
      if (!a.refs) return;
      if (a.refs.reservation) reservations.push({ a, di, day: d, cat: bkCategory(a) });
      else if (a.refs.booking) passes.push({ a, di, day: d });
    });
  });
  return { reservations, passes };
}

function BookingCard({ item, booked, onToggle, lang }) {
  const { x, r } = useT();
  const { a, day } = item;
  const res = a.refs.reservation;
  const code = res.code;
  const isBooked = !!booked[code];
  return (
    <article className={'bk-card' + (isBooked ? ' is-booked' : '')}>
      <div className="bk-card-top">
        <span className="bk-badge"><b>{lang === 'th' ? day.labelTh : day.label}</b> · {bkShortDate(day.date, lang)}</span>
        <button className="bk-status" onClick={() => onToggle(code)} aria-pressed={isBooked}>
          <span className="bk-tick"><Icon name="check" size={11} stroke={2.2} /></span>
          <span>{isBooked ? x({ en: 'Booked', th: 'จองแล้ว' }) : x({ en: 'To book', th: 'ยังไม่จอง' })}</span>
        </button>
      </div>
      <div className="bk-card-body">
        <span className="bk-card-time"><Icon name="clock" size={13} stroke={1.4} /> {a.time} · {r(a.meridiem)}</span>
        <h3 className="bk-card-title">{x(a.title)}</h3>
        <span className="bk-card-place">{x(a.place)}</span>
      </div>
      <div className="bk-meta">
        <div className="bk-meta-row">
          <span className="bk-meta-k">{r('Confirmation')}</span>
          <span className="bk-meta-v bk-code">{code}</span>
        </div>
        <div className="bk-meta-row">
          <span className="bk-meta-k">{r('Party')}</span>
          <span className="bk-meta-v">{x(res.party)}</span>
        </div>
        {a.refs.booking ? (
          <div className="bk-meta-row">
            <span className="bk-meta-k">{x({ en: 'Cost', th: 'ค่าใช้จ่าย' })}</span>
            <span className="bk-meta-v bk-price">{x(a.refs.booking)}</span>
          </div>
        ) : null}
      </div>
      {a.refs.map ? (
        <div className="bk-card-foot">
          <a className="bk-maplink" href={a.refs.map} target="_blank" rel="noopener noreferrer">
            <Icon name="map" size={14} stroke={1.4} /> {x({ en: 'Directions', th: 'เส้นทาง' })}
          </a>
        </div>
      ) : null}
    </article>
  );
}

function Bookings({ trip, onHome, onItinerary, onPhrases, onParty, onEmergency, lang, onLang }) {
  const { x } = useT();
  const { reservations, passes } = collectBookings(trip);
  const [booked, setBooked] = useState(() => {
    try { return JSON.parse(localStorage.getItem('jp-booked') || '{}'); } catch (e) { return {}; }
  });
  const toggle = (code) => setBooked((prev) => {
    const n = { ...prev, [code]: !prev[code] };
    try { localStorage.setItem('jp-booked', JSON.stringify(n)); } catch (e) {}
    return n;
  });
  const total = reservations.length;
  const doneCount = reservations.filter((it) => booked[it.a.refs.reservation.code]).length;
  const pct = total ? doneCount / total : 0;

  return (
    <div className="bookings">
      <header className="chrome chrome-min">
        <button className="chrome-home" onClick={onHome}>
          <Icon name="feather" size={16} stroke={1.3} />
          <span className="wwn"><b>WWN</b> <span className="wwn-full">World Wide Nick</span></span>
        </button>
        <div className="chrome-bar-r">
          <button className="chrome-sos" onClick={onEmergency}>
            <Icon name="alert" size={15} stroke={1.5} />
            <span>{x({ en: 'Emergency', th: 'ฉุกเฉิน' })}</span>
          </button>
          <button className="chrome-nav" onClick={onItinerary}>
            <Icon name="compass" size={15} stroke={1.4} />
            <span>{x({ en: 'Itinerary', th: 'แผนการเดินทาง' })}</span>
          </button>
          <button className="chrome-nav" onClick={onParty}>
            <Icon name="passport" size={15} stroke={1.4} />
            <span>{x({ en: 'Party', th: 'ทีมงาน' })}</span>
          </button>
          <button className="chrome-nav" onClick={onPhrases}>
            <Icon name="note" size={15} stroke={1.4} />
            <span>{x({ en: 'Phrases', th: 'ประโยคใช้บ่อย' })}</span>
          </button>
          <Clock variant="chrome" />        </div>
      </header>

      <main className="bk-stage">
        <section className="bk-hero">
          <span className="ov-kicker">{x({ en: 'Reference', th: 'ข้อมูลอ้างอิง' })}</span>
          <h1 className="bk-h1">{x({ en: 'Bookings & Reservations', th: 'การจองทั้งหมด' })}</h1>
          <p className="bk-lede">{x({
            en: 'Every confirmation, ticket and pass for the nine days, gathered in one place. Tick each off as you book it.',
            th: 'ทุกการยืนยัน ตั๋ว และพาส สำหรับเก้าวัน รวมไว้ในที่เดียว ทำเครื่องหมายเมื่อจองแต่ละรายการเสร็จ',
          })}</p>
          <div className="bk-progress" style={{ '--p': pct }}>
            <div className="bk-progress-top">
              <span className="bk-progress-k">{x({ en: 'Booking progress', th: 'ความคืบหน้าการจอง' })}</span>
              <span className="bk-progress-v"><b>{doneCount}</b> / {total} {x({ en: 'confirmed', th: 'จองแล้ว' })}</span>
            </div>
            <span className="bk-progress-bar"><span className="bk-progress-fill"></span></span>
          </div>
        </section>

        {BK_CATS.map((cat) => {
          const items = reservations.filter((it) => it.cat === cat.key);
          if (!items.length) return null;
          return (
            <section className="bk-sec" key={cat.key}>
              <div className="bk-sec-head">
                <span className="bk-sec-ic"><Icon name={cat.icon} size={18} stroke={1.3} /></span>
                <h2 className="bk-sec-title">{x(cat.label)}</h2>
                <span className="bk-sec-count">{items.length}</span>
              </div>
              <div className="bk-grid">
                {items.map((it, i) => (
                  <BookingCard key={it.a.refs.reservation.code + i} item={it} booked={booked} onToggle={toggle} lang={lang} />
                ))}
              </div>
            </section>
          );
        })}

        {passes.length ? (
          <section className="bk-sec">
            <div className="bk-sec-head">
              <span className="bk-sec-ic"><Icon name="ticket" size={18} stroke={1.3} /></span>
              <h2 className="bk-sec-title">{x({ en: 'Tickets, Passes & Entry', th: 'ตั๋ว พาส และค่าเข้า' })}</h2>
              <span className="bk-sec-count">{passes.length}</span>
            </div>
            <div className="bk-pass-grid">
              {passes.map((it, i) => (
                <div className="bk-pass" key={i}>
                  <span className="bk-pass-ic"><Icon name={it.a.icon || 'ticket'} size={16} stroke={1.3} /></span>
                  <span className="bk-pass-text">
                    <span className="bk-pass-title">{x(it.a.title)}</span>
                    <span className="bk-pass-place">{(lang === 'th' ? it.day.labelTh : it.day.label)} · {x(it.a.place)}</span>
                  </span>
                  <span className="bk-pass-price">{x(it.a.refs.booking)}</span>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <div className="ov-credit">
          <span className="ov-credit-rule" aria-hidden="true"></span>
          <span className="ov-credit-text">{x(window.CREDIT)}</span>
        </div>
      </main>
    </div>
  );
}

// ── Konbini — convenience stores nearest each stay ──────────────────────
function Konbini({ data }) {
  const { x } = useT();
  const ref = useInView();
  return (
    <section className="party konbini" ref={ref}>
      <div className="party-head">
        <span className="ov-kicker">{x(data.subtitle)}</span>
        <h2 className="ov-h2">{x(data.title)}</h2>
      </div>
      <div className="kon-grid">
        {data.items.map((it, i) => (
          <a className="kon" key={i} style={{ '--i': i }} href={it.map} target="_blank" rel="noopener noreferrer">
            <span className="kon-ic"><Icon name="store" size={18} stroke={1.3} /></span>
            <span className="kon-body">
              <span className="kon-top">
                <span className="kon-brand">{it.brand}</span>
                <span className="kon-day">{x(it.days)}</span>
              </span>
              <span className="kon-stay">{x(it.stay)}</span>
              <span className="kon-detail">{x(it.detail)}</span>
            </span>
            <span className="kon-go"><Icon name="arrowUpRight" size={15} stroke={1.5} /></span>
          </a>
        ))}
      </div>
      <p className="kon-note">{x(data.note)}</p>
    </section>
  );
}

// ── EmergencySheet — quick-access emergency contacts (top shortcut) ─────
function EmergencySheet({ data, onClose }) {
  const { x } = useT();
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  const telHref = (v) => 'tel:' + v.replace(/[^+\d]/g, '');
  return (
    <div className="emg-scrim" onClick={onClose}>
      <div className="emg-sheet" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="emg-sheet-hd">
          <span className="emg-sheet-ic"><Icon name="alert" size={18} stroke={1.5} /></span>
          <div className="emg-sheet-titles">
            <span className="emg-sheet-kicker">{x(data.subtitle)}</span>
            <h2 className="emg-sheet-title">{x(data.title)}</h2>
          </div>
          <button className="emg-sheet-close" onClick={onClose} aria-label="Close"><Icon name="close" size={18} stroke={1.3} /></button>
        </div>
        <div className="emg-sheet-grid">
          {data.items.map((it, i) => (
            <a className={'emg' + (it.urgent ? ' emg-urgent' : '')} key={i} href={telHref(it.value)}>
              <span className="emg-ic"><Icon name={it.icon} size={17} stroke={1.4} /></span>
              <span className="emg-text">
                <span className="emg-label">{x(it.label)}</span>
                <span className="emg-value mono">{it.value}</span>
              </span>
              <span className="emg-go"><Icon name="phone" size={14} stroke={1.5} /></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Overview essentials — exchange rate + Visit Japan Web ───────────────
function OvEssentials({ data }) {
  const { x } = useT();
  return (
    <div className="ov-ess">
      <div className="ov-ess-card ov-ess-fx">
        <span className="ov-ess-ic"><Icon name="wallet" size={18} stroke={1.3} /></span>
        <span className="ov-ess-body">
          <span className="ov-ess-label">{x(data.currency.label)}</span>
          <span className="ov-ess-rate">{data.currency.base}<span className="ov-ess-eq"> = </span>{data.currency.value}</span>
          <span className="ov-ess-note">{x(data.currency.note)}</span>
        </span>
      </div>
      <a className="ov-ess-card ov-ess-vjw" href={data.visitJapan.href} target="_blank" rel="noopener noreferrer">
        <span className="ov-ess-ic"><Icon name="passport" size={18} stroke={1.3} /></span>
        <span className="ov-ess-body">
          <span className="ov-ess-label">{data.visitJapan.label}</span>
          <span className="ov-ess-desc">{x(data.visitJapan.desc)}</span>
        </span>
        <span className="ov-ess-go"><Icon name="external" size={15} stroke={1.5} /></span>
      </a>
    </div>
  );
}

// ── Mobile bottom tab bar — primary view switcher (mobile only) ─────────
function MobileTabBar({ view, onItinerary, onBookings, onParty, onPhrases, onSettings }) {
  const { x } = useT();
  const tabs = [
    { key: 'itinerary', icon: 'compass', size: 21, stroke: 1.5,  label: { en: 'Itinerary', th: 'แผนการเดินทาง', ja: '旅程' }, on: onItinerary },
    { key: 'bookings',  icon: 'book',    size: 23, stroke: 1.45, label: { en: 'Bookings',  th: 'การจอง', ja: '予約' },         on: onBookings },
    { key: 'party',     icon: 'passport',size: 22, stroke: 1.5,  label: { en: 'Party',     th: 'ทีมงาน', ja: 'メンバー' },     on: onParty },
    { key: 'phrases',   icon: 'note',    size: 22, stroke: 1.5,  label: { en: 'Phrases',   th: 'ประโยค', ja: '会話' },         on: onPhrases },
    { key: 'settings',  icon: 'gear',    size: 15, stroke: 2.2,  label: { en: 'Settings',  th: 'ตั้งค่า', ja: '設定' },         on: onSettings },
  ];
  return (
    <nav className="mtab" role="tablist" aria-label="Sections">
      <div className="mtab-inner">
      {tabs.map((t) => (
        <button key={t.key} className={'mtab-item' + (view === t.key ? ' active' : '')}
          role="tab" aria-selected={view === t.key} onClick={t.on}>
          <span className="mtab-ic"><Icon name={t.icon} size={t.size} stroke={t.stroke} /></span>
          <span className="mtab-lb">{x(t.label)}</span>
        </button>
      ))}
      </div>
    </nav>
  );
}

// ── Packing / before-you-fly checklist ──────────────────────────────────
function Packing({ data }) {
  const { x } = useT();
  const ref = useInView();
  const [done, setDone] = useState(() => {
    try { return JSON.parse(localStorage.getItem('jp-packed') || '{}'); } catch (e) { return {}; }
  });
  const toggle = (k) => setDone((prev) => {
    const n = { ...prev, [k]: !prev[k] };
    try { localStorage.setItem('jp-packed', JSON.stringify(n)); } catch (e) {}
    return n;
  });
  return (
    <section className="party packing" ref={ref}>
      <div className="party-head">
        <span className="ov-kicker">{x(data.subtitle)}</span>
        <h2 className="ov-h2">{x(data.title)}</h2>
      </div>
      <div className="pack-groups">
        {data.groups.map((g, gi) => (
          <div className="pack-group" key={gi}>
            <h3 className="pack-group-label">{x(g.label)}</h3>
            <ul className="pack-list">
              {g.items.map((it, ii) => {
                const k = 'g' + gi + '-i' + ii;
                const on = !!done[k];
                return (
                  <li key={ii}>
                    <button className={'pack-item' + (on ? ' on' : '')} onClick={() => toggle(k)} aria-pressed={on}>
                      <span className="pack-check"><Icon name="check" size={12} stroke={2.6} /></span>
                      <span className="pack-label">{x(it)}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Phrases — handy Japanese phrases ────────────────────────────────────
function Phrases({ data }) {
  const { x } = useT();
  const ref = useInView();
  return (
    <section className="party phrases" ref={ref}>
      <div className="party-head">
        <span className="ov-kicker">{x(data.subtitle)}</span>
        <h2 className="ov-h2">{x(data.title)}</h2>
      </div>
      <div className="phrase-grid">
        {data.items.map((p, i) => (
          <div className="phrase" key={i} style={{ '--i': i }}>
            <span className="phrase-jp">{p.jp}</span>
            <span className="phrase-romaji">{p.romaji}</span>
            <span className="phrase-mean">{x(p.mean)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PhrasesPage({ onHome, onItinerary, onBookings, onParty, onEmergency, lang, onLang }) {
  const { x } = useT();
  return (
    <div className="bookings">
      <header className="chrome chrome-min">
        <button className="chrome-home" onClick={onHome}>
          <Icon name="feather" size={16} stroke={1.3} />
          <span className="wwn"><b>WWN</b> <span className="wwn-full">World Wide Nick</span></span>
        </button>
        <div className="chrome-bar-r">
          <button className="chrome-sos" onClick={onEmergency}>
            <Icon name="alert" size={15} stroke={1.5} />
            <span>{x({ en: 'Emergency', th: 'ฉุกเฉิน' })}</span>
          </button>
          <button className="chrome-nav" onClick={onItinerary}>
            <Icon name="compass" size={15} stroke={1.4} />
            <span>{x({ en: 'Itinerary', th: 'แผนการเดินทาง' })}</span>
          </button>
          <button className="chrome-nav" onClick={onBookings}>
            <Icon name="book" size={15} stroke={1.4} />
            <span>{x({ en: 'Bookings', th: 'การจอง' })}</span>
          </button>
          <button className="chrome-nav" onClick={onParty}>
            <Icon name="passport" size={15} stroke={1.4} />
            <span>{x({ en: 'Party', th: 'ทีมงาน' })}</span>
          </button>
          <Clock variant="chrome" />        </div>
      </header>
      <main className="bk-stage">
        <Phrases data={window.PHRASES} />
      </main>
    </div>
  );
}

function TravelersPage({ onHome, onItinerary, onBookings, onPhrases, onEmergency, lang, onLang }) {
  const { x } = useT();
  return (
    <div className="bookings">
      <header className="chrome chrome-min">
        <button className="chrome-home" onClick={onHome}>
          <Icon name="feather" size={16} stroke={1.3} />
          <span className="wwn"><b>WWN</b> <span className="wwn-full">World Wide Nick</span></span>
        </button>
        <div className="chrome-bar-r">
          <button className="chrome-sos" onClick={onEmergency}>
            <Icon name="alert" size={15} stroke={1.5} />
            <span>{x({ en: 'Emergency', th: 'ฉุกเฉิน' })}</span>
          </button>
          <button className="chrome-nav" onClick={onItinerary}>
            <Icon name="compass" size={15} stroke={1.4} />
            <span>{x({ en: 'Itinerary', th: 'แผนการเดินทาง' })}</span>
          </button>
          <button className="chrome-nav" onClick={onBookings}>
            <Icon name="book" size={15} stroke={1.4} />
            <span>{x({ en: 'Bookings', th: 'การจอง' })}</span>
          </button>
          <button className="chrome-nav" onClick={onPhrases}>
            <Icon name="note" size={15} stroke={1.4} />
            <span>{x({ en: 'Phrases', th: 'ประโยคใช้บ่อย' })}</span>
          </button>
          <Clock variant="chrome" />        </div>
      </header>
      <main className="bk-stage">
        <Travelers data={window.TRAVELERS} />
      </main>
    </div>
  );
}

function SettingsPage({ onHome, onItinerary, onBookings, onParty, onPhrases, onEmergency, lang, onLang, mode, onMode }) {
  const { x } = useT();
  const langs = [
    { v: 'en', main: 'English', sub: 'EN' },
    { v: 'th', main: 'ไทย', sub: 'TH' },
    { v: 'ja', main: '日本語', sub: 'JA' },
  ];
  const modes = [
    { v: 'light', icon: 'sun', label: { en: 'Light', th: 'สว่าง', ja: 'ライト' } },
    { v: 'dark', icon: 'moon', label: { en: 'Dark', th: 'มืด', ja: 'ダーク' } },
    { v: 'system', icon: 'monitor', label: { en: 'System', th: 'ตามเครื่อง', ja: 'システム' } },
  ];
  return (
    <div className="bookings">
      <header className="chrome chrome-min">
        <button className="chrome-home" onClick={onHome}>
          <Icon name="feather" size={16} stroke={1.3} />
          <span className="wwn"><b>WWN</b> <span className="wwn-full">World Wide Nick</span></span>
        </button>
        <div className="chrome-bar-r">
          <button className="chrome-sos" onClick={onEmergency}>
            <Icon name="alert" size={15} stroke={1.5} />
            <span>{x({ en: 'Emergency', th: 'ฉุกเฉิน', ja: '緊急' })}</span>
          </button>
          <button className="chrome-nav" onClick={onItinerary}>
            <Icon name="compass" size={15} stroke={1.4} />
            <span>{x({ en: 'Itinerary', th: 'แผนการเดินทาง', ja: '旅程' })}</span>
          </button>
          <button className="chrome-nav" onClick={onBookings}>
            <Icon name="book" size={15} stroke={1.4} />
            <span>{x({ en: 'Bookings', th: 'การจอง', ja: '予約' })}</span>
          </button>
          <button className="chrome-nav" onClick={onParty}>
            <Icon name="passport" size={15} stroke={1.4} />
            <span>{x({ en: 'Party', th: 'ทีมงาน', ja: 'メンバー' })}</span>
          </button>
          <Clock variant="chrome" />
        </div>
      </header>
      <main className="bk-stage">
        <section className="party settings-page">
          <div className="party-head">
            <span className="ov-kicker">{x({ en: 'Preferences', th: 'การตั้งค่า', ja: '環境設定' })}</span>
            <h2 className="ov-h2">{x({ en: 'Settings', th: 'ตั้งค่า', ja: '設定' })}</h2>
          </div>

          <div className="set-group">
            <div className="set-label"><Icon name="globe" size={16} stroke={1.4} /><span>{x({ en: 'Language', th: 'ภาษา', ja: '言語' })}</span></div>
            <div className="set-seg set-seg-3">
              {langs.map((l) => (
                <button key={l.v} className={'set-seg-btn' + (lang === l.v ? ' on' : '')} onClick={() => onLang(l.v)}>
                  <span className="set-seg-main">{l.main}</span>
                  <span className="set-seg-sub">{l.sub}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="set-group">
            <div className="set-label"><Icon name="sun" size={16} stroke={1.4} /><span>{x({ en: 'Appearance', th: 'ธีม', ja: 'テーマ' })}</span></div>
            <div className="set-seg set-seg-3">
              {modes.map((m) => (
                <button key={m.v} className={'set-seg-btn set-seg-ic' + (mode === m.v ? ' on' : '')} onClick={() => onMode(m.v)}>
                  <Icon name={m.icon} size={19} stroke={1.4} />
                  <span className="set-seg-main">{x(m.label)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="set-credit">
            <span className="set-credit-mark"><Icon name="feather" size={15} stroke={1.3} /> <b>WWN</b> · World Wide Nick</span>
            <span className="set-credit-by">{window.CREDIT}</span>
          </div>
        </section>
      </main>
    </div>
  );
}

Object.assign(window, {
  LangCtx, useT, LangToggle, ImageFrame, ReferenceDock,
  ActivityBlock, Timeline, Cover, DayNav, ActivityDetail,
  Clock, RouteMap, Travelers, Overview, Emergency, Budget, Bookings,
  Konbini, EmergencySheet, DayKonbini, OvEssentials, DayWeather, MobileTabBar,
  Packing, Phrases, TravelersPage, SettingsPage,
});
