const jsonData = require("C:/Users/ryanj/github/mapping_earthquakes/Simple_Map/static/js/fire_incident_reporting.json");

fireIncident = []

jsonData.records.forEach(myFunction);

function myFunction(item) {
    if (item[4] <= 251) {
        fireIncident.push(item[10].trim());
    }
}

fireCount = {}

fireIncident.forEach(countFire)

function countFire(fire) {
    if (fireCount[fire]) {
        fireCount[fire] += 1;
    } else {
        fireCount[fire] = 1;       
    }
}

console.log(fireCount['Roxbury'])