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
var lookupByTrainID = {};


function getSubwayData(){
    var relevantData = [];
    console.log(lookupByTrainID)
    fetchUrl(baseUrl + stopId + stationIds[nextUpd] + timeinterval + 58, function(error, meta, body){


        try{
            var metros = JSON.parse(body).ResponseData.Metros;
            ///console.log(metros.length);
            for(var i = 0; i < metros.length; i++){
                if(metros[i].JourneyDirection == 1 && metros[i].LineNumber == "18"){
                    var train = {
                        id: metros[i].JourneyNumber,
                        nextStation: stationIds[nextUpd],
                        timeToNextStation: metros[i].DisplayTime
                    }
                    lookupByTrainID[metros[i].JourneyNumber] = train;
                    console.log("--------------------------------------")
                }

            }

            nextUpd++;
            if(nextUpd >= stationIds.length){
                nextUpd = 0;
                console.log("END END END END END END")
            }

        }catch(err){
            console.log(err);
        }
    });
}