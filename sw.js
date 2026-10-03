// Service Worker — TwoOfUs PWA
// این فایل برای اینکه Chrome اندروید اپ رو به عنوان PWA نصب کنه لازمه

const CACHE_VERSION = 'twoofus-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// هندلر fetch — فعلاً فقط passthrough (بعداً می‌تونی کش اضافه کنی)
self.addEventListener('fetch', (event) => {
  // به‌طور پیش‌فرض از شبکه استفاده کن
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
