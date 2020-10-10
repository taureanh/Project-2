var myMap = L.map("map", {
  center: [39.0119, -98.4842],
  zoom: 5
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var url = "USA.geojson";

d3.json(url, function(response) {

  console.log(response.features[1].geometry.coordinates);


// $.getJSON("https://taureanh.github.io/geojson/", function(json) {
//     console.log(json); 


/* $.getJSON("https://taureanh.github.io/geojson/")
    .done(function( data ) {
       console.log(data); */


       for (var i = 0; i < response.features.length; i++) {
        var geometry1 = response.features[i];
        // console.log(geometry1.geometry.coordinates)
        if (geometry1) {
          L.marker([geometry1.geometry.coordinates[1], geometry1.geometry.coordinates[0]]).addTo(myMap);
        }
      }


});


