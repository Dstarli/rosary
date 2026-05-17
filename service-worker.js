// ========== SERVICE WORKER v6.0 ==========

const CACHE_NAME = 'rosary-app-v6.0';
const DYNAMIC_CACHE = 'rosary-dynamic-v6.0';

const STATIC_ASSETS = [
    './',
    './index.html',
    './prayers.js',
    './manifest.json',
    './icon-192.jpg',
    './icon-512.jpg',
    './vendor/tailwindcss-browser.js',
    './vendor/react.production.min.js',
    './vendor/react-dom.production.min.js',
    './vendor/babel.min.js',
    './assets/joyful_1.jpg',
    './assets/joyful_2.jpg',
    './assets/joyful_3.jpg',
    './assets/joyful_4.jpg',
    './assets/joyful_5.jpg',
    './assets/sorrowful_1.jpg',
    './assets/sorrowful_2.jpg',
    './assets/sorrowful_3.jpg',
    './assets/sorrowful_4.jpg',
    './assets/sorrowful_5.jpg',
    './assets/glorious_1.jpg',
    './assets/glorious_2.jpg',
    './assets/glorious_3.jpg',
    './assets/glorious_4.jpg',
    './assets/glorious_5.jpg',
    './assets/luminous_1.jpg',
    './assets/luminous_2.jpg',
    './assets/luminous_3.jpg',
    './assets/luminous_4.jpg',
    './assets/luminous_5.jpg'
];

// ========== INSTALL EVENT ==========
// Cache all static and CDN assets when SW is installed
self.addEventListener('install', event => {
    console.log('[SW] Installing Service Worker v6.0...');
    
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[SW] Caching static assets');
            return cache.addAll(STATIC_ASSETS);
        }).then(() => {
            console.log('[SW] Installation complete!');
            return self.skipWaiting(); // Activate immediately
        })
    );
});

// ========== ACTIVATE EVENT ==========
// Clean up old caches
self.addEventListener('activate', event => {
    console.log('[SW] Activating Service Worker v6.0...');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    // Delete old caches
                    if (cache !== CACHE_NAME && cache !== DYNAMIC_CACHE) {
                        console.log('[SW] Deleting old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => {
            console.log('[SW] Activation complete!');
            return self.clients.claim(); // Take control of all pages immediately
        })
    );
});

// ========== FETCH EVENT ==========
// Network-first strategy for HTML, Cache-first for everything else
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Skip chrome extensions and other protocols
    if (!url.protocol.startsWith('http')) {
        return;
    }
    
    event.respondWith(
        (async () => {
            try {
                // For HTML files: Network first, fallback to cache
                const accept = request.headers.get('accept') || '';

                if (accept.includes('text/html')) {
                    try {
                        const networkResponse = await fetch(request);
                        // Update cache with new version
                        const cache = await caches.open(CACHE_NAME);
                        cache.put(request, networkResponse.clone());
                        return networkResponse;
                    } catch (error) {
                        // Network failed, try cache
                        const cachedResponse = await caches.match(request);
                        if (cachedResponse) {
                            console.log('[SW] Serving from cache (offline):', request.url);
                            return cachedResponse;
                        }
                        throw error;
                    }
                }
                
                // For everything else: Cache first, fallback to network
                const cachedResponse = await caches.match(request);
                if (cachedResponse) {
                    console.log('[SW] Cache hit:', request.url);
                    return cachedResponse;
                }
                
                // Not in cache, fetch from network
                console.log('[SW] Fetching from network:', request.url);
                const networkResponse = await fetch(request);
                
                // Cache the response for future use
                if (networkResponse.ok) {
                    const cache = await caches.open(DYNAMIC_CACHE);
                    cache.put(request, networkResponse.clone());
                }
                
                return networkResponse;
                
            } catch (error) {
                console.error('[SW] Fetch failed:', request.url, error);
                
                // Return offline page or error response
                if (accept.includes('text/html')) {
                    return new Response(
                        `<!DOCTYPE html>
                        <html>
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Offline - Mân Côi</title>
                            <style>
                                body {
                                    font-family: system-ui, -apple-system, sans-serif;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    min-height: 100vh;
                                    margin: 0;
                                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                    color: white;
                                    text-align: center;
                                    padding: 20px;
                                }
                                .container {
                                    max-width: 400px;
                                }
                                h1 { font-size: 3rem; margin: 0 0 1rem; }
                                p { font-size: 1.125rem; opacity: 0.9; }
                                button {
                                    margin-top: 2rem;
                                    padding: 12px 24px;
                                    background: white;
                                    color: #667eea;
                                    border: none;
                                    border-radius: 8px;
                                    font-size: 1rem;
                                    font-weight: 600;
                                    cursor: pointer;
                                }
                                button:hover { opacity: 0.9; }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <h1>📡</h1>
                                <h2>Không có kết nối</h2>
                                <p>Bạn đang offline. Vui lòng kiểm tra kết nối internet và thử lại.</p>
                                <button onclick="location.reload()">Thử lại</button>
                            </div>
                        </body>
                        </html>`,
                        {
                            headers: { 'Content-Type': 'text/html' }
                        }
                    );
                }
                
                return new Response('Network error', { status: 408 });
            }
        })()
    );
});

// ========== MESSAGE EVENT ==========
// Handle messages from the app
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        event.waitUntil(
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cache => caches.delete(cache))
                );
            }).then(() => {
                console.log('[SW] All caches cleared');
            })
        );
    }
});
