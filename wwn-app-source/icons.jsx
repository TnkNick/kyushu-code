// icons.jsx — bespoke thin-line iconography for the travel lookbook.
// Single <Icon name size stroke/> component. All strokes use currentColor,
// fill:none, round caps/joins, 24×24 grid. Tuned hairline weight (1.25).

const ICON_PATHS = {
  grid: (
    <>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.6" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6" />
    </>
  ),
  checklist: (
    <>
      <path d="M10.5 6.5h8.5" />
      <path d="M10.5 12h8.5" />
      <path d="M10.5 17.5h8.5" />
      <path d="M4.2 6.4l1.3 1.3 2.3-2.5" />
      <path d="M4.2 11.9l1.3 1.3 2.3-2.5" />
      <path d="M4.2 17.4l1.3 1.3 2.3-2.5" />
    </>
  ),
  // ── Reference dock ──────────────────────────────────────────────
  map: (
    <>
      <path d="M9 3.5 3.5 6v14.5L9 18l6 2.5 5.5-2.5V6L15 8.5 9 6Z" />
      <path d="M9 6v12" />
      <path d="M15 8.5v12" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4.5-4.2 6.5-7.6 6.5-10.5A6.5 6.5 0 0 0 5.5 10.5C5.5 13.4 7.5 16.8 12 21Z" />
      <circle cx="12" cy="10.3" r="2.2" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1.5 1.5" />
      <path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1.5-1.5" />
    </>
  ),
  external: (
    <>
      <path d="M14 5h5v5" />
      <path d="M19 5l-8 8" />
      <path d="M18 13.5V19H5V6h5.5" />
    </>
  ),
  ticket: (
    <>
      <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5v2a2 2 0 0 0 0 3.8v1.2A1.5 1.5 0 0 1 18.5 17h-13A1.5 1.5 0 0 1 4 15.5v-1.2a2 2 0 0 0 0-3.8Z" />
      <path d="M14 7v10" strokeDasharray="1.5 2.2" />
    </>
  ),
  book: (
    <>
      <path d="M12 6.5C10.5 5.3 8.5 5 6.5 5.2A1.4 1.4 0 0 0 5 6.6v10.2c0 .9.8 1.5 1.7 1.4 1.8-.2 3.7.1 5.3 1.3 1.6-1.2 3.5-1.5 5.3-1.3.9.1 1.7-.5 1.7-1.4V6.6a1.4 1.4 0 0 0-1.5-1.4c-2-.2-4 .1-5.5 1.3Z" />
      <path d="M12 6.5v12" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 8v4.2l2.8 1.8" />
    </>
  ),
  note: (
    <>
      <path d="M6 4.5h8.5L18 8v11.5H6Z" />
      <path d="M14.3 4.5V8H18" />
      <path d="M8.5 12h6" />
      <path d="M8.5 15h4" />
    </>
  ),
  // ── Navigation / chrome ─────────────────────────────────────────
  arrowRight: <path d="M5 12h13M13 6.5 18.5 12 13 17.5" />,
  arrowUpRight: <path d="M7 17 17 7M9 7h8v8" />,
  chevronRight: <path d="M9.5 5.5 16 12l-6.5 6.5" />,
  chevronDown: <path d="M5.5 9.5 12 16l6.5-6.5" />,
  chevronLeft: <path d="M14.5 5.5 8 12l6.5 6.5" />,
  plus: <path d="M12 5.5v13M5.5 12h13" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  calendar: (
    <>
      <rect x="4.5" y="6" width="15" height="14" rx="1.5" />
      <path d="M4.5 10h15M8.5 4v4M15.5 4v4" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M15 9l-1.8 4.2L9 15l1.8-4.2Z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" />
    </>
  ),
  feather: (
    <>
      <path d="M19 5c-3.5-1-9 1.5-11.5 6.5L5 17l5.5-2.5C15.5 12 18 6.5 19 5Z" />
      <path d="M5 19l4.5-4.5M9 12h4" />
    </>
  ),
  // ── Logistics / transit (step entries) ──────────────────────────
  plane: (
    <>
      <path d="M10.4 3.6c.5-1.1 2-1.1 2.5 0l1.2 2.5 6 3.2c.6.3 1 .9 1 1.6v.7l-7.4-1.6v4.1l1.9 1.4v1.4l-3.3-.9-3.3.9v-1.4l1.9-1.4v-4.1L3.5 11.6v-.7c0-.7.4-1.3 1-1.6l6-3.2Z" />
    </>
  ),
  train: (
    <>
      <rect x="5.5" y="4" width="13" height="12.5" rx="2.5" />
      <path d="M5.5 10.5h13" />
      <path d="M9 16.5l-2.5 3.5M15 16.5l2.5 3.5" />
      <path d="M9 13.3h.01M15 13.3h.01" />
    </>
  ),
  car: (
    <>
      <path d="M4 13.2l1.7-4.4A2.2 2.2 0 0 1 7.8 7.4h8.4a2.2 2.2 0 0 1 2.1 1.4l1.7 4.4" />
      <path d="M3.5 13.2h17v3.6a1 1 0 0 1-1 1h-1.4a1 1 0 0 1-1-1v-.8H6.9v.8a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1Z" />
      <path d="M7 16h.01M17 16h.01" />
    </>
  ),
  walk: (
    <>
      <circle cx="12.6" cy="4.6" r="1.5" />
      <path d="M12.6 8l-2.6 2.2 1 4.3M12.6 8l2.4 1.6 1.5 3.1" />
      <path d="M10.4 14l-2 5.4M15 12.8l1.2 6.6" />
    </>
  ),
  bed: (
    <>
      <path d="M3.5 8v9.5M3.5 17.5h17M20.5 17.5v-3.2a3 3 0 0 0-3-3H8.5v3.2" />
      <path d="M8.5 11.3V9.4h5.2A2.4 2.4 0 0 1 16 11.3" />
    </>
  ),
  passport: (
    <>
      <path d="M6 4.5h10.5A1.5 1.5 0 0 1 18 6v12a1.5 1.5 0 0 1-1.5 1.5H6Z" />
      <path d="M6 4.5V19.5" />
      <circle cx="12" cy="10" r="2.3" />
      <path d="M9.8 14.5h4.4" />
    </>
  ),
  luggage: (
    <>
      <path d="M8 7V5.6A1.6 1.6 0 0 1 9.6 4h4.8A1.6 1.6 0 0 1 16 5.6V7" />
      <rect x="4.5" y="7" width="15" height="12" rx="2" />
      <path d="M9 7v12M15 7v12" />
    </>
  ),
  phone: (
    <>
      <path d="M7.5 4.5 9.3 4l1.3 3.2-1.5 1.2a9 9 0 0 0 3.5 3.5l1.2-1.5L16.9 12l-.5 1.8a1.4 1.4 0 0 1-1.5 1A11 11 0 0 1 5.6 6a1.4 1.4 0 0 1 1.9-1.5Z" />
    </>
  ),
  at: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M15.2 9v4a2 2 0 0 0 3.3 1.5c1.2-1.3 1.4-3.6.6-5.6A7.5 7.5 0 1 0 14.5 19" />
    </>
  ),
  wallet: (
    <>
      <path d="M4.5 7.5A1.5 1.5 0 0 1 6 6h11.5A1.5 1.5 0 0 1 19 7.5V9" />
      <rect x="4.5" y="7.5" width="15" height="11" rx="2" />
      <path d="M19 12.5h-3.2a1.8 1.8 0 0 0 0 3.6H19" />
      <path d="M15.9 14.3h.01" />
    </>
  ),
  bowl: (
    <>
      <path d="M3.5 11h17a8.5 8.5 0 0 1-8.5 8 8.5 8.5 0 0 1-8.5-8Z" />
      <path d="M8.8 7.7c0-1.1.9-1.4.9-2.5M12 7.7c0-1.1.9-1.4.9-2.5M15.2 7.7c0-1.1.9-1.4.9-2.5" />
    </>
  ),
  check: <path d="M5 12.5 10 17.3 19.2 6.8" />,
  image: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.4" />
      <path d="M4 17l4.5-4.5 3 3 3-3.5 5 5" />
    </>
  ),
  cloud: <path d="M7.5 18h8.5a3.3 3.3 0 0 0 .4-6.6A4.7 4.7 0 0 0 7.6 10 3.6 3.6 0 0 0 7.5 18Z" />,
  cloudSun: (
    <>
      <circle cx="8" cy="8" r="2.6" />
      <path d="M8 2.8v1.4M3.4 8H4.8M4.5 4.5l1 1M11.5 4.5l-1 1" />
      <path d="M10.5 19h6a2.8 2.8 0 0 0 .3-5.6A4 4 0 0 0 9.3 12.6 3 3 0 0 0 10.5 19Z" />
    </>
  ),
  store: (
    <>
      <path d="M5 10v8.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
      <path d="M3.8 6h16.4l1 4.2a2.1 2.1 0 0 1-4.1.9 2.1 2.1 0 0 1-4.1 0 2.1 2.1 0 0 1-4.1 0 2.1 2.1 0 0 1-4.1-.9Z" />
      <path d="M9.8 19.5v-4.5h4.4v4.5" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4.3 21 19.5H3Z" />
      <path d="M12 10v4" />
      <path d="M12 16.7h.01" />
    </>
  ),
  // ── Settings / theme / language ─────────────────────────────────
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z" />,
  monitor: (
    <>
      <rect x="3.5" y="5" width="17" height="11" rx="1.5" />
      <path d="M9 19.5h6M12 16.5v3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2.5 2.2 3.8 5 3.8 8s-1.3 5.8-3.8 8c-2.5-2.2-3.8-5-3.8-8s1.3-5.8 3.8-8Z" />
    </>
  ),
};

function Icon({ name, size = 18, stroke = 1.25, style, className }) {
  const inner = ICON_PATHS[name] || null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: 'block', flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      {inner}
    </svg>
  );
}

Object.assign(window, { Icon, ICON_PATHS });
