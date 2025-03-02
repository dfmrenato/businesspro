const CACHE_NAME = 'offline-cache-v1';
const OFFLINE_URL = './offline.html';

self.addEventListener('install', async (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            try {
                const response = await fetch(OFFLINE_URL);
                if (!response.ok) {
                    throw new Error(`Erro ao buscar ${OFFLINE_URL}, status: ${response.status}`);
                }
                await cache.put(OFFLINE_URL, response);
                console.log('Offline page cached successfully');
            } catch (error) {
                console.error('Falha ao armazenar a página offline:', error);
            }
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(OFFLINE_URL);
        })
    );
});