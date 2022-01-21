let map = L.map('mapid', {
    center: [
        40.7, -94.5
    ],
    zoom: 4
});

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function (data) {
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data).addTo(map)
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,

    /*
    additional views: 
    mapbox/outdoors-v11,
    mapbox/light-v10,
    mapbox/dark-v10,
    mapbox/satellite-v9,
    mapbox/satellite-streets-v11
    */

    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);