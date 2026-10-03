// Service Worker — TwoOfUs PWA
// لازم برای اینکه Chrome اندروید اپ رو به عنوان PWA واقعی نصب کنه

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Passthrough — درخواست‌ها از شبکه میان، اگه قطع بود از کش
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
