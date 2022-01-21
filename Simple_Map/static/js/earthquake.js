let map = L.map('mapid', {
    center: [
        40.7, -94.5
    ],
    zoom: 4
});

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function (data) {


    // This function returns the style data for each of the earthquakes we plot on
    // the map. We pass the magnitude of the earthquake into a function
    // to calculate the radius.
    function styleInfo(feature) {
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: "#ffae42", //light orange
            color: "#000000", //black
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    };

    // This function determines the radius of the earthquake marker based on its magnitude.
    // Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
    function getRadius(magnitude) {
        if (magnitude === 0) {
            return 1;
        }
        return magnitude * 4;
    };

    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            console.log(data);
            return L.circleMarker(latlng);
        },
        style: styleInfo
    }).addTo(map);
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