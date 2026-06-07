// app.jsx — composition root: state, transitions, language, tweaks, embed params.
const FONT_STACKS = {
  trirong: '"Trirong", "Sukhumvit Set", "IBM Plex Sans Thai", Georgia, serif',
  sukhumvit: '"Sukhumvit Set", "IBM Plex Sans Thai", "Hanken Grotesk", system-ui, sans-serif',
  notoserif: '"Noto Serif Thai", "Trirong", Georgia, serif',
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "display": "sukhumvit",
  "typeScale": 100,
  "density": "calm",
  "showImages": true,
  "motion": true
}/*EDITMODE-END*/;

const Q = new URLSearchParams(
  (typeof window !== 'undefined' && window.__EMBED) ? window.__EMBED : location.search.slice(1)
);
const PARAM = {
  view: Q.get('view'),
  day: parseInt(Q.get('day') || '0', 10),
  detail: Q.get('detail') != null ? parseInt(Q.get('detail'), 10) : null,
  theme: Q.get('theme'),
  display: Q.get('display'),
  density: Q.get('density'),
  scale: Q.get('scale') ? parseInt(Q.get('scale'), 10) : null,
  lang: Q.get('lang'),
  embed: Q.get('embed') === '1',
  flow: Q.get('flow') === '1',
};

function initialTweaks() {
  const t = { ...TWEAK_DEFAULTS };
  if (PARAM.display) t.display = PARAM.display;
  if (PARAM.density) t.density = PARAM.density;
  if (PARAM.scale) t.typeScale = PARAM.scale;
  return t;
}

function readLang() {
  if (PARAM.lang === 'th' || PARAM.lang === 'en' || PARAM.lang === 'ja') return PARAM.lang;
  try { const s = localStorage.getItem('lookbook-lang'); if (s) return s; } catch (e) {}
  return 'th';
}

function readMode() {
  try { const s = localStorage.getItem('lookbook-mode'); if (s) return s; } catch (e) {}
  return 'dark';
}

// has the user already tapped "Begin the journey" once? (then skip the overview on launch)
function readBegan() {
  try { return localStorage.getItem('lookbook-began') === 'yes'; } catch (e) { return false; }
}

// which day index does today fall on: before the trip → 0, after → last, during → that day
function computeTodayDay() {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const dates = TRIP.days.map((d) => {
    const s = (d && d.date && d.date.en) || '';
    const m = s.match(/(\d{1,2})\s+([A-Za-z]{3,})\s+(\d{4})/);
    if (!m) return null;
    const dt = new Date(m[2] + ' ' + m[1] + ' ' + m[3]);
    return isNaN(dt.getTime()) ? null : dt;
  });
  let target = 0;
  const first = dates.find(Boolean);
  const last = [...dates].reverse().find(Boolean);
  if (first && today < first) target = 0;
  else if (last && today > last) target = TRIP.days.length - 1;
  else {
    for (let i = dates.length - 1; i >= 0; i--) {
      if (dates[i] && today >= dates[i]) { target = i; break; }
    }
  }
  return target;
}

function App() {
  const [t, setTweak] = useTweaks(initialTweaks());
  const [lang, setLang] = React.useState(readLang());
  const began = PARAM.view !== 'day' && readBegan();
  const [view, setView] = React.useState((PARAM.view === 'day' || began) ? 'itinerary' : 'overview');
  const [day, setDay] = React.useState(PARAM.view === 'day' ? PARAM.day : (began ? computeTodayDay() : 0));
  const [dayKey, setDayKey] = React.useState(0);
  const [detail, setDetail] = React.useState(
    PARAM.detail != null ? TRIP.days[PARAM.day || 0].activities[PARAM.detail] : null
  );
  const [emgOpen, setEmgOpen] = React.useState(false);
  const scrollRef = React.useRef(null);

  const changeLang = (l) => { setLang(l); try { localStorage.setItem('lookbook-lang', l); } catch (e) {} };

  const [mode, setMode] = React.useState(readMode());
  const changeMode = (m) => { setMode(m); try { localStorage.setItem('lookbook-mode', m); } catch (e) {} };
  const [sysDark, setSysDark] = React.useState(() => {
    try { return window.matchMedia('(prefers-color-scheme: dark)').matches; } catch (e) { return true; }
  });
  React.useEffect(() => {
    let mq;
    try { mq = window.matchMedia('(prefers-color-scheme: dark)'); } catch (e) { return; }
    const on = (e) => setSysDark(e.matches);
    mq.addEventListener ? mq.addEventListener('change', on) : mq.addListener(on);
    return () => { mq.removeEventListener ? mq.removeEventListener('change', on) : mq.removeListener(on); };
  }, []);
  const resolvedMode = mode === 'system' ? (sysDark ? 'dark' : 'light') : mode;

  React.useEffect(() => { if (window.__hideSplash) window.__hideSplash(); }, []);

  React.useEffect(() => {
    if (!PARAM.flow) return;
    const post = () => window.parent.postMessage(
      { type: 'lookbook-height', name: window.name, h: document.documentElement.scrollHeight }, '*');
    post();
    const ro = new ResizeObserver(post);
    ro.observe(document.documentElement);
    window.addEventListener('load', post);
    const iv = setInterval(post, 400);
    const stop = setTimeout(() => clearInterval(iv), 5000);
    return () => { ro.disconnect(); clearInterval(iv); clearTimeout(stop); };
  }, [day, view, lang]);

  const rootStyle = {
    '--serif': FONT_STACKS[t.display] || FONT_STACKS.trirong,
    '--scale': (t.typeScale || 100) / 100,
  };

  const begin = () => { setView('itinerary'); };
  // "Begin the journey" — jump to today's day: before the trip → first day,
  // after it → last day, during it → the matching day.
  const beginJourney = () => {
    try { localStorage.setItem('lookbook-began', 'yes'); } catch (e) {}
    setDay(computeTodayDay()); setDayKey((k) => k + 1); setView('itinerary');
  };
  const home = () => { setDetail(null); setView('overview'); };
  const openBookings = () => { setDetail(null); setView('bookings'); };
  const openPhrases = () => { setDetail(null); setView('phrases'); };
  const openParty = () => { setDetail(null); setView('party'); };
  const openSettings = () => { setDetail(null); setView('settings'); };
  const ovTop = () => { const s = document.querySelector('.ov-stage'); if (s) s.scrollTo({ top: 0, behavior: 'smooth' }); };
  const jumpTo = (i) => { setDay(i); setDayKey((k) => k + 1); setView('itinerary'); };
  const selectDay = (i) => {
    if (i === day) return;
    setDay(i);
    setDayKey((k) => k + 1);
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0, behavior: 'auto' });
  };

  const cls = ['lookbook', 'density-' + t.density, 'lang-' + lang];
  if (!t.showImages) cls.push('no-images');
  if (!t.motion) cls.push('no-bgfx');
  if (PARAM.embed) cls.push('embed', 'no-anim');
  if (PARAM.flow) cls.push('flow');

  // Cover & overview borrow Day 1's palette; itinerary uses the active day's.
  const activeTheme = PARAM.theme || (view === 'itinerary' ? TRIP.days[day].theme : TRIP.days[0].theme);

  // Paint the page CANVAS (html/body) with the active theme's --paper so the iOS
  // home-indicator strip — which shows the canvas background, NOT any fixed layer —
  // matches the content instead of leaving a dark dead-zone band.
  React.useEffect(() => {
    const lb = document.querySelector('.lookbook');
    if (!lb) return;
    const paper = getComputedStyle(lb).getPropertyValue('--paper').trim();
    if (!paper) return;
    document.documentElement.style.backgroundColor = paper;
    document.body.style.backgroundColor = paper;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', paper);
  }, [activeTheme, resolvedMode]);

  return (
    <LangCtx.Provider value={lang}>
      <div className={cls.join(' ')} data-theme={activeTheme} data-mode={resolvedMode} data-lang={lang} style={rootStyle}>
        <div className="bg-fx" aria-hidden="true">
          <span className="orb orb-1"></span>
          <span className="orb orb-2"></span>
          <span className="orb orb-3"></span>
          <span className="bg-grain"></span>
        </div>
        {view === 'overview' ? (
          <div className="view-overview">
            <Overview trip={TRIP} dest={DESTINATION} travelers={TRAVELERS}
              onBegin={beginJourney} onJump={jumpTo} onHome={ovTop} onBookings={openBookings} onPhrases={openPhrases} onParty={openParty} onEmergency={() => setEmgOpen(true)}
              lang={lang} onLang={changeLang} />
          </div>
        ) : view === 'bookings' ? (
          <div className="view-bookings">
            <Bookings trip={TRIP} onHome={home} onItinerary={begin} onPhrases={openPhrases} onParty={openParty} onEmergency={() => setEmgOpen(true)} lang={lang} onLang={changeLang} />
          </div>
        ) : view === 'phrases' ? (
          <div className="view-phrases">
            <PhrasesPage onHome={home} onItinerary={begin} onBookings={openBookings} onParty={openParty} onEmergency={() => setEmgOpen(true)} lang={lang} onLang={changeLang} />
          </div>
        ) : view === 'party' ? (
          <div className="view-party">
            <TravelersPage onHome={home} onItinerary={begin} onBookings={openBookings} onPhrases={openPhrases} onEmergency={() => setEmgOpen(true)} lang={lang} onLang={changeLang} />
          </div>
        ) : view === 'settings' ? (
          <div className="view-settings">
            <SettingsPage onHome={home} onItinerary={begin} onBookings={openBookings} onParty={openParty} onPhrases={openPhrases} onEmergency={() => setEmgOpen(true)} lang={lang} onLang={changeLang} mode={mode} onMode={changeMode} />
          </div>
        ) : (
          <div className="view-itinerary">
            <DayNav days={TRIP.days} current={day} onSelect={selectDay} onHome={home} onBookings={openBookings} onPhrases={openPhrases} onParty={openParty} onEmergency={() => setEmgOpen(true)} lang={lang} onLang={changeLang} />
            <main className="stage" ref={scrollRef}>
              <div className="stage-inner" key={dayKey + '-' + lang}>
                <Timeline day={TRIP.days[day]} onOpen={setDetail} />
                <Footer trip={TRIP} day={day} lang={lang} onPrev={() => selectDay(Math.max(0, day - 1))} first={day === 0} onNext={() => selectDay(Math.min(TRIP.days.length - 1, day + 1))} last={day === TRIP.days.length - 1} />
              </div>
            </main>
          </div>
        )}

        {detail ? <ActivityDetail a={detail} onClose={() => setDetail(null)} /> : null}

        {emgOpen ? <EmergencySheet data={window.EMERGENCY} onClose={() => setEmgOpen(false)} /> : null}

        {view === 'itinerary' || view === 'bookings' || view === 'party' || view === 'phrases' || view === 'settings' ? (
          <MobileTabBar view={view} onItinerary={begin} onBookings={openBookings} onParty={openParty} onPhrases={openPhrases} onSettings={openSettings} />
        ) : null}

        {!PARAM.embed ? (
          <TweaksPanel title="Tweaks">
            <TweakSection label="Atmosphere" />
            <TweakToggle label="Ambient motion" value={t.motion} onChange={(v) => setTweak('motion', v)} />
            <TweakSelect
              label="Display font"
              value={t.display}
              options={[{ value: 'sukhumvit', label: 'Sukhumvit — all sans' }, { value: 'trirong', label: 'Trirong — elegant serif' }, { value: 'notoserif', label: 'Noto Serif — classic' }]}
              onChange={(v) => setTweak('display', v)}
            />
            <TweakSection label="Composition" />
            <TweakSlider label="Type scale" value={t.typeScale} min={88} max={116} step={2} unit="%" onChange={(v) => setTweak('typeScale', v)} />
            <TweakRadio label="Rhythm" value={t.density} options={[{ value: 'compact', label: 'Compact' }, { value: 'calm', label: 'Calm' }]} onChange={(v) => setTweak('density', v)} />
            <TweakToggle label="Show imagery" value={t.showImages} onChange={(v) => setTweak('showImages', v)} />
          </TweaksPanel>
        ) : null}
      </div>
    </LangCtx.Provider>
  );
}

function Footer({ trip, day, onPrev, onNext, first, last, lang }) {
  const x = (v) => window.tx(v, lang);
  return (
    <footer className="stage-foot">
      <div className="stage-foot-line" aria-hidden="true"></div>
      <div className="stage-foot-nav">
        {!first ? (
          <button className="stage-prev" onClick={onPrev}>
            <span className="stage-prev-i"><Icon name="chevronLeft" size={18} stroke={1.4} /></span>
            <span className="stage-prev-txt">
              <span className="stage-prev-k">{x({ en: 'Previous', th: 'ก่อนหน้า' })}</span>
              <span className="stage-prev-t">{(lang === 'th' ? trip.days[day - 1].labelTh : trip.days[day - 1].label)}</span>
            </span>
          </button>
        ) : <span className="stage-foot-spacer"></span>}
        {last ? (
          <div className="stage-foot-end">
            <Icon name="compass" size={20} stroke={1.1} />
            <p>{x({ en: 'Journey complete — nine days across Kyushu.', th: 'การเดินทางสิ้นสุดลง — เก้าวันทั่วคิวชู' })}</p>
          </div>
        ) : (
          <button className="stage-next" onClick={onNext}>
            <span className="stage-next-txt">
              <span className="stage-next-k">{x({ en: 'Next', th: 'ถัดไป' })}</span>
              <span className="stage-next-t">{(lang === 'th' ? trip.days[day + 1].labelTh : trip.days[day + 1].label)}</span>
            </span>
            <Icon name="arrowRight" size={18} stroke={1.4} />
          </button>
        )}
      </div>
      <div className="stage-credit">{x(window.CREDIT)}</div>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
