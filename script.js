var map = L.map('map').setView([42.667542, 21.166191], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle = L.circle([42.667542, 21.166191], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 300,
}).addTo(map);
circle.bindPopup("Ketu ka ndodhur nje termet!").openPopup();

var polygon = L.polygon([
 
    [
        42.66406816955026,
        21.16293563363189
      ],
      [
          42.66329917992621,
        21.162325610155904
      ],
      [
          42.66195983362172,
        21.164878994131954
      ],
      [
          42.664760252079304,
        21.16491385261665
      ],
      [
          42.66406816955026,
        21.16293563363189
      ]

]).addTo(map);