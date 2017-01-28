/**
 * Created by Oskar on 2017-01-28.
 */
var request = require('request');
// example url
var url = " http://api.sl.se/api2/realtimedeparturesv4.json?key=c52efcf6acc944479d8adc1e34ab15c9&siteid=9192&timewindow=60";

var baseUrl = "http://api.sl.se/api2/realtimedeparturesv4.json?key=c52efcf6acc944479d8adc1e34ab15c9";
var stopId = "&siteid="
var timeinterval = "&timewindow=";

var stationData = require('./StationData');


var stationIds = stationData.getIds(18);
var stationToUpdate = stationIds[0];
var nextUpd = 0;
setInterval(getSubwayData, 3000);



function getSubwayData(){
    request(baseUrl + stopId + stationToUpdate + timeinterval + 60, function(error, response, body){
        nextUpd++;
        if(nextUpd >= stationIds.length){
            nextUpd = 0;
        }
        console.log(body);
        stationToUpdate = stationIds[nextUpd];
    });
}