const cacheName = 'pam'
const files = ['/', '/index.html', '/style.css', '/main.js']

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(files)))
})

self.addEventListener('fetch', e => {
  const { request: req } = e
  e.respondWith(caches.match(req).then(res => res || fetch(req)))
})
