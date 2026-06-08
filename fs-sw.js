/* FS Test service worker — replicates the Kyushu app's caching to test if a SW
   (precaching the page/manifest) is what blocks iOS fullscreen. */
const CACHE = 'fs-test-v1';
const PRECACHE = ['fs.html', 'fs-manifest.json', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) =>
    Promise.all(PRECACHE.map((u) => c.add(new Request(u, { cache: 'reload' })).catch(() => {})))));
});
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith((async () => {
    if (req.mode === 'navigate') {
      try {
        const res = await fetch(req, { cache: 'no-cache' });
        if (res && res.ok) { (await caches.open(CACHE)).put(req, res.clone()); return res; }
        return (await caches.match(req, { ignoreSearch: true })) || res;
      } catch (err) {
        return (await caches.match(req, { ignoreSearch: true })) || Response.error();
      }
    }
    const cached = await caches.match(req, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const res = await fetch(req);
      if (res && (res.ok || res.type === 'opaque')) { (await caches.open(CACHE)).put(req, res.clone()); }
      return res;
    } catch (err) { return Response.error(); }
  })());
});
