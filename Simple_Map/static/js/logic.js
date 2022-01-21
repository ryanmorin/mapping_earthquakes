// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center (40.7 Long, -94.5 Lat) and zoom level (4).
// let map = L.map('mapid', {
//     center: [
//         40.7, -94.5
//     ],
//     zoom: 4
// });



let map = L.map('mapid').setView([37.5, -122.5], 10);

/*

Between these comments dotted lines between multiple points

let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

L.polyline(line, {
    color: 'blue',
    weight: 4,
    //dashed line
    dashArray: '5, 5'
}).addTo(map);

*/

// add a marker to the map for LA Cali
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillColor: 'yellow',
//     fillOpacity: 0.5,
// }).addTo(map);

// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillColor: '#ffffa1'
// }).addTo(map);

// An array containing each city's location, state, and population.

/*

loop through cities and add a radius based on the city size

let cityData = cities;

cityData.forEach(function (city) {
    console.log(city);
    L.circleMarker(city.location, {
        radius: city.population / 100000 })
        .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
        .addTo(map);
});

*/

/*
map for a GeoJSON point
*/

// Add GeoJSON data.

let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

L.geoJSON(sanFranAirport).addTo(map);



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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