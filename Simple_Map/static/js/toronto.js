console.log("working");


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,

    /*
    additional views: 
    mapbox/streets-v11,
    mapbox/outdoors-v11,
    mapbox/light-v10,
    mapbox/dark-v10,
    mapbox/satellite-v9,
    mapbox/satellite-streets-v11
    */

    accessToken: API_KEY
});


// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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

let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

let map = L.map('mapid', {
    center:[43.7,-79.3],
    zoom: 11,
    layers: [satelliteStreets]
});

L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/ryanmorin/mapping_earthquakes/main/torontoNeighborhoods.json";

d3.json(torontoHoods).then(function(data) {
    console.log(data);
    L.geoJSON(data).addTo(map); 
});