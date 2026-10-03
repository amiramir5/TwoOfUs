// Service Worker — TwoOfUs PWA
// Pure passthrough — هیچ کش نمی‌کنه، همیشه از شبکه می‌خونه

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // همیشه از شبکه بخون — هیچ کشی
  event.respondWith(fetch(event.request));
});
