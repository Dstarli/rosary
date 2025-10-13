const CACHE = 'man-coi-v2.0';

// ✅ THÊM prayers.js VÀO CACHE ĐỂ APP HOẠT ĐỘNG OFFLINE
const urls = [
    '/',
    '/index.html',
    '/prayers.js',      // ⭐ FILE QUAN TRỌNG - Chứa dữ liệu kinh nguyện
    '/manifest.json',
    '/icon-192.png',
    '/icon-512.png'
];

// Install event - Cache tất cả files
self.addEventListener('install', e => {
    console.log('[Service Worker] Installing...');
    e.waitUntil(
        caches.open(CACHE)
            .then(cache => {
                console.log('[Service Worker] Caching all files');
                return cache.addAll(urls);
            })
            .then(() => self.skipWaiting()) // Kích hoạt ngay lập tức
    );
});

// Fetch event - Phục vụ từ cache trước, sau đó từ network
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(response => {
                if (response) {
                    console.log('[Service Worker] Serving from cache:', e.request.url);
                    return response;
                }
                console.log('[Service Worker] Fetching from network:', e.request.url);
                return fetch(e.request);
            })
            .catch(() => {
                // Nếu cả cache và network đều fail
                console.log('[Service Worker] Fetch failed for:', e.request.url);
            })
    );
});

// Activate event - Xóa cache cũ
self.addEventListener('activate', e => {
    console.log('[Service Worker] Activating...');
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE) {
                        console.log('[Service Worker] Deleting old cache:', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    return self.clients.claim(); // Kiểm soát tất cả clients ngay lập tức
});
