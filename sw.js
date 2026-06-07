/* WWN · Kyushu Trip — offline service worker */
const CACHE = 'wwn-kyushu-v42';
const PRECACHE = ["./", "manifest.json", "vendor/react.production.min.js", "vendor/react-dom.production.min.js", "vendor/babel.min.js", "icon-192.png", "icon-512.png", "images/a-d1-canalcity.jpg", "images/a-d1-fukcoffee.jpg", "images/a-d1-illum.jpg", "images/a-d1-imdonut.jpg", "images/a-d1-motsunabe.jpg", "images/a-d1-nightlife.jpg", "images/a-d1-ramen.jpg", "images/a-d10-canal.jpg", "images/a-d10-dinner.jpg", "images/a-d10-illum.jpg", "images/a-d10-mentaiko.jpg", "images/a-d10-nightlife.jpg", "images/a-d10-ramen.jpg", "images/a-d2-cityrun.jpg", "images/a-d2-milkroad.jpg", "images/a-d2-nishiyu.jpg", "images/a-d2-komezuka.jpg", "images/a-d2-dinner.jpg", "images/a-d2-nightlife.jpg", "images/a-d2-omotesando.jpg", "images/a-d2-starbucks.jpg", "images/a-d2-tenmangu.jpg", "images/a-d2-unagi.jpg", "images/a-d2-yanagawa.jpg", "images/a-d2-yatai.jpg", "images/a-d3-daikanbo.jpg", "images/a-d3-kaiseki.jpg", "images/a-d3-kusasenri.jpg", "images/a-d3-lunch.jpg", "images/a-d3-nakadake.jpg", "images/a-d3-sweets.jpg", "images/a-d4-basashi.jpg", "images/a-d4-castle.jpg", "images/a-d4-katsuretsu.jpg", "images/a-d4-suizenji.jpg", "images/a-d4-sweets.jpg", "images/a-d5-chinoike.jpg", "images/a-d5-lunch.jpg", "images/a-d5-sushi.jpg", "images/a-d5-sweets.jpg", "images/a-d5-umijigoku.jpg", "images/a-d6-kinrin.jpg", "images/a-d6-mabushi.jpg", "images/a-d6-ryokan.jpg", "images/a-d6-sweets.jpg", "images/a-d6-yunotsubo.jpg", "images/a-d7-lunch.jpg", "images/a-d7-mist.jpg", "images/a-d7-shopping.jpg", "images/a-d7-tempura.jpg", "images/a-d8-cafes.jpg", "images/a-d8-dinner.jpg", "images/a-d8-keya.jpg", "images/a-d8-oyster.jpg", "images/a-d8-sunset.jpg", "images/a-d8-torii.jpg", "images/a-d9-daimyo.jpg", "images/a-d9-lunch.jpg", "images/a-d9-maizuru.jpg", "images/a-d9-nightlife.jpg", "images/a-d9-ohori.jpg", "images/a-d9-sweets.jpg", "images/a-d9-tower.jpg", "images/a-d9-yakiniku.jpg", "images/cover-hero.jpg", "images/day1-cover.jpg", "images/day10-cover.jpg", "images/day11-cover.jpg", "images/day2-cover.jpg", "images/day3-cover.jpg", "images/day4-cover.jpg", "images/day5-cover.jpg", "images/day6-cover.jpg", "images/day7-cover.jpg", "images/day8-cover.jpg", "images/day9-cover.jpg", "images/dish-a-d1-imdonut-0.jpg", "images/dish-a-d1-imdonut-1.jpg", "images/dish-a-d1-imdonut-2.jpg", "images/dish-a-d1-fukcoffee-0.jpg", "images/dish-a-d1-fukcoffee-1.jpg", "images/dish-a-d1-motsunabe-0.jpg", "images/dish-a-d1-motsunabe-1.jpg", "images/dish-a-d1-motsunabe-2.jpg", "images/dish-a-d1-motsunabe-3.jpg", "images/dish-a-d1-ramen-0.jpg", "images/dish-a-d1-ramen-1.jpg", "images/dish-a-d1-ramen-2.jpg", "images/dish-a-d1-ramen-3.jpg", "images/dish-a-d10-ramen-0.jpg", "images/dish-a-d10-ramen-1.jpg", "images/dish-a-d10-ramen-2.jpg", "images/dish-a-d10-ramen-3.jpg", "images/dish-a-d2-cityrun-0.jpg", "images/dish-a-d2-cityrun-1.jpg", "images/dish-a-d2-cityrun-2.jpg", "images/dish-a-d2-cityrun-3.jpg", "images/dish-a-d2-cityrun-4.jpg", "images/dish-a-d2-cityrun-5.jpg", "images/dish-a-d2-starbucks-0.jpg", "images/dish-a-d2-starbucks-1.jpg", "images/dish-a-d2-starbucks-2.jpg", "images/dish-a-d2-yatai-0.jpg", "images/dish-a-d2-yatai-1.jpg", "images/dish-a-d2-yatai-2.jpg", "images/dish-a-d2-yatai-3.jpg", "images/dish-a-d3-kaiseki-0.jpg", "images/dish-a-d3-kaiseki-1.jpg", "images/dish-a-d3-kaiseki-2.jpg", "images/dish-a-d3-kaiseki-3.jpg", "images/dish-a-d3-sweets-0.jpg", "images/dish-a-d3-sweets-1.jpg", "images/dish-a-d3-sweets-2.jpg", "images/dish-a-d4-basashi-0.jpg", "images/dish-a-d4-basashi-1.jpg", "images/dish-a-d4-basashi-2.jpg", "images/dish-a-d4-basashi-3.jpg", "images/dish-a-d4-katsuretsu-0.jpg", "images/dish-a-d4-katsuretsu-1.jpg", "images/dish-a-d4-katsuretsu-2.jpg", "images/dish-a-d4-katsuretsu-3.jpg", "images/dish-a-d4-sweets-0.jpg", "images/dish-a-d4-sweets-1.jpg", "images/dish-a-d4-sweets-2.jpg", "images/dish-a-d5-sushi-0.jpg", "images/dish-a-d5-sushi-1.jpg", "images/dish-a-d5-sushi-2.jpg", "images/dish-a-d5-sushi-3.jpg", "images/dish-a-d5-sweets-0.jpg", "images/dish-a-d5-sweets-1.jpg", "images/dish-a-d5-sweets-2.jpg", "images/dish-a-d6-mabushi-0.jpg", "images/dish-a-d6-mabushi-1.jpg", "images/dish-a-d6-mabushi-2.jpg", "images/dish-a-d6-mabushi-3.jpg", "images/dish-a-d6-ryokan-0.jpg", "images/dish-a-d6-ryokan-1.jpg", "images/dish-a-d6-ryokan-2.jpg", "images/dish-a-d6-ryokan-3.jpg", "images/dish-a-d6-sweets-0.jpg", "images/dish-a-d6-sweets-1.jpg", "images/dish-a-d6-sweets-2.jpg", "images/dish-a-d6-sweets-3.jpg", "images/dish-a-d7-tempura-0.jpg", "images/dish-a-d7-tempura-1.jpg", "images/dish-a-d7-tempura-2.jpg", "images/dish-a-d7-tempura-3.jpg", "images/dish-a-d8-oyster-0.jpg", "images/dish-a-d8-oyster-1.jpg", "images/dish-a-d8-oyster-2.jpg", "images/dish-a-d8-oyster-3.jpg", "images/dish-a-d9-sweets-0.jpg", "images/dish-a-d9-sweets-1.jpg", "images/dish-a-d9-sweets-2.jpg", "images/dish-a-d9-yakiniku-0.jpg", "images/dish-a-d9-yakiniku-1.jpg", "images/dish-a-d9-yakiniku-2.jpg", "images/dish-a-d9-yakiniku-3.jpg", "images/map-kyushu.jpg", "images/p-bank.jpg", "images/p-nick.jpg", "images/p-tagot.jpg", "images/p-tum.jpg", "images/r-aso.jpg", "images/r-beppu.jpg", "images/r-fukuoka.jpg", "images/r-itoshima.jpg", "images/r-kumamoto.jpg", "images/r-yufuin.jpg"];
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
    // Navigations: network-first (revalidate) so an installed PWA always gets the
    // latest HTML/CSS when online; fall back to cache offline or on a bad response.
    if (req.mode === 'navigate') {
      try {
        const res = await fetch(req, { cache: 'no-cache' });
        if (res && res.ok) { (await caches.open(CACHE)).put(req, res.clone()); return res; }
        return (await caches.match(req, { ignoreSearch: true })) || (await caches.match('./')) || (await caches.match('index.html')) || res;
      } catch (err) {
        return (await caches.match(req, { ignoreSearch: true })) || (await caches.match('./')) || (await caches.match('index.html')) || Response.error();
      }
    }
    // Everything else (vendor JS, images, fonts): cache-first for speed + offline.
    const cached = await caches.match(req, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const res = await fetch(req);
      const url = new URL(req.url);
      const cacheable = url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
      if (cacheable && res && (res.ok || res.type === 'opaque')) {
        (await caches.open(CACHE)).put(req, res.clone());
      }
      return res;
    } catch (err) {
      return Response.error();
    }
  })());
});
