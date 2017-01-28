/**
 * Created by Oskar on 2017-01-28.
 */
var restify = require('restify');
var request = require('request');
var url = "http://api.sl.se/api2/realtimedeparturesv4.json?key=c52efcf6acc944479d8adc1e34ab15c9&siteid=9192&timewindow=5";
var urlBase = "http://api.sl.se/api2/realtimedeparturesv4.json?";
var key = "key=c52efcf6acc944479d8adc1e34ab15c9&";
var siteId = "siteid=";
var timespan = "&timewindow=";
var stationData = require('./subwayStationData/StationData');
var subInfo = require('./subwayStationData/SubwayInformation');

function getStations(req, res, next) {
    request(url, function(error, response, body){
        console.log();
        res.send(stationData.getData(req.params.station));
    });

    next();
}

var server = restify.createServer();
server.get('/stations/:station', getStations);
server.head('/stations/:station', getStations);







server.listen(8000, function(){

});