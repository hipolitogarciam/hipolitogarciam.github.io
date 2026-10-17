// Lleva las direcciones antiguas (hipolitogarciam.github.io/...) a su sitio nuevo en urglab.com.
// Se usa desde index.html y desde 404.html: GitHub Pages sirve 404.html para cualquier ruta
// que ya no existe en esta cuenta (por ejemplo, un repositorio que se ha movido a Urglab).
(function () {
  var DESTINO = 'https://urglab.com';

  // Primera carpeta de la dirección antigua (en minúsculas) → dirección nueva.
  // null = herramienta que ya no está disponible al público.
  var MAPA = {
    'simulador-vm': '/simulador-ventilacion/',
    'defib-physics': '/desfibrilacion-pcr/',
    'formacion-bomberos-ucv': '/bomberos-ucv-formacion/',
    'urglab': null,
    'urglabv2': null
  };

  var partes = location.pathname.split('/').filter(Boolean);
  var primera = (partes[0] || '').toLowerCase();

  if (!primera) {
    location.replace(DESTINO + '/');
    return;
  }

  if (Object.prototype.hasOwnProperty.call(MAPA, primera)) {
    var nueva = MAPA[primera];
    if (nueva === null) {
      document.documentElement.className = 'no-disponible';
      return;
    }
    var resto = partes.slice(1).join('/');
    location.replace(DESTINO + nueva + resto + location.search + location.hash);
    return;
  }

  // Cualquier otra dirección desconocida: a la portada.
  location.replace(DESTINO + '/');
})();
