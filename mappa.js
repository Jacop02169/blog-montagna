document.addEventListener("DOMContentLoaded", function () {
    const mappaDiv = document.getElementById('mappa-gpx');
    if (!mappaDiv) return;

    const gpxFile = mappaDiv.getAttribute('data-gpx');
    if (!gpxFile) return;

    const map = L.map('mappa-gpx').setView([46.5, 12.8], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    new L.GPX(gpxFile, {
        async: true,
        marker_options: {
            startIconUrl: 'start.png',
            endIconUrl: 'stop.png',
            shadowUrl: null
        }
    }).on('loaded', function(e) {
        map.fitBounds(e.target.getBounds());
    }).addTo(map);
});