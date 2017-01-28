/**
 * Created by Oskar on 2017-01-28.
 */
var request = require('request');
// example url
var url = " http://api.sl.se/api2/realtimedeparturesv4.json?key=c52efcf6acc944479d8adc1e34ab15c9&siteid=9192&timewindow=60";
var fetchUrl = require("fetch").fetchUrl;
var baseUrl = "http://api.sl.se/api2/realtimedeparturesv4.json?key=c52efcf6acc944479d8adc1e34ab15c9";
var stopId = "&siteid="
var timeinterval = "&timewindow=";

var stationData = require('./StationData');


var stationIds = stationData.getIds(18);
var stationToUpdate = stationIds[0];
var nextUpd = 0;
setInterval(getSubwayData, 3000);



function getSubwayData(){
    var relevantData = [];
    console.log([stationIds[nextUpd]]);

    // source file is iso-8859-15 but it is converted to utf-8 automatically
    fetchUrl(baseUrl + stopId + stationIds[nextUpd] + timeinterval + 58, function(error, meta, body){
        //console.log(body.toString());

        console.log("K"+error);

        try{
            console.log("OKAY!")
            var metros = JSON.parse(body).ResponseData.Metros;
            for(var i = 0; i < metros.size; i++){
                if(metros[i].JourneyDirection != 1){
                    continue;
                }
                if(metros[i].LineNumber == 18){
                    console.log("WHOOO!");
                }
            }
            nextUpd++;
            if(nextUpd >= stationIds.length){
                nextUpd = 0;
            }

        }catch(err){
            console.log(err);
        }



    });
}