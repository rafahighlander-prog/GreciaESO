const CACHE_NAME = 'greciaeso-v8';
const ASSETS = [
  './',
  './index.html',
  './css/styles.css',
  './js/datos.js',
  './js/app.js',
  './images/u1-helade.svg',
  './images/u2-polis.svg',
  './images/u3-democracia.svg',
  './images/u4-helenismo.svg',
  './images/u5-arte.svg',
  './images/u6-mitologia.svg',
  './manifest.json',
  './icons/icon-192.svg',
  './icons/icon-512.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
