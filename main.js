/* Initialise map */
var map = L.map('map').setView([52.520007, 13.404953999999975], 12);

/* Fetch tiles (from Carto) */
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  maxZoom: 18, attribution: '<a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

/* vars for image overlay */
var imageUrl = 'img/berlin_map.svg',
    imageBounds = [[52.631729, 13.228088], [52.339031, 13.645569]],
    imageOpacity = '0.5';

/* Add image overlay */
L.imageOverlay(imageUrl, imageBounds, {opacity:imageOpacity}).addTo(map);
