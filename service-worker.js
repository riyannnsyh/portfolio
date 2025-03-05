self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('pwa-cache-v1').then((cache) => {
            return cache.addAll([
                'index.html',
                'style.css',
                'img/MR.jpg',
                'img/MR.jpg'
            ]);
        })
    );
});
