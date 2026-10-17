// La formación LIFEPAK se ha mudado a https://urglab.com/bomberos-ucv-formacion/.
// Quien la instaló en la dirección antigua tiene guardada una copia sin conexión. Cuando su
// móvil busque una versión nueva, recibirá este archivo: borra la copia antigua, se da de baja
// y lleva las pantallas abiertas a la dirección nueva.
const NUEVA = 'https://urglab.com/bomberos-ucv-formacion/';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const claves = await caches.keys();
    await Promise.all(claves.filter((k) => k.startsWith('v3.')).map((k) => caches.delete(k)));
    await self.registration.unregister();
    const ventanas = await self.clients.matchAll({ type: 'window' });
    ventanas.forEach((v) => v.navigate(NUEVA));
  })());
});
