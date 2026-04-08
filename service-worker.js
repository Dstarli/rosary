// ========== SERVICE WORKER v3.0 (FIXED) ==========

const CACHE_NAME = 'rosary-app-v4.0';
const DYNAMIC_CACHE = 'rosary-dynamic-v4.0';

// ✅ CRITICAL: Include ALL resources needed for offline functionality
const STATIC_ASSETS = [
    './',
    './index.html',
    './prayers.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// ✅ CDN resources that should be cached for offline use
const CDN_ASSETS = [
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/react@18/umd/react.production.min.js',
    'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
    'https://unpkg.com/@babel/standalone/babel.min.js'
];

// ========== INSTALL EVENT ==========
// Cache all static and CDN assets when SW is installed
self.addEventListener('install', event => {
    console.log('[SW] Installing Service Worker v3.0...');
    
    event.waitUntil(
        Promise.all([
            // Cache static assets
            caches.open(CACHE_NAME).then(cache => {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            }),
            // Cache CDN resources
            caches.open(DYNAMIC_CACHE).then(cache => {
                console.log('[SW] Caching CDN resources');
                return Promise.all(
                    CDN_ASSETS.map(url => {
                        return fetch(url, { mode: 'cors' })
                            .then(response => {
                                if (response.ok) {
                                    return cache.put(url, response);
                                }
                            })
                            .catch(err => {
                                console.warn('[SW] Failed to cache CDN:', url, err);
                            });
                    })
                );
            })
        ]).then(() => {
            console.log('[SW] Installation complete!');
            return self.skipWaiting(); // Activate immediately
        })
    );
});

// ========== ACTIVATE EVENT ==========
// Clean up old caches
self.addEventListener('activate', event => {
    console.log('[SW] Activating Service Worker v3.0...');
    
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
                if (request.headers.get('accept').includes('text/html')) {
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
                if (request.headers.get('accept').includes('text/html')) {
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
