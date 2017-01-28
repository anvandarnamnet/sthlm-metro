/**
 * Created by Oskar on 2017-01-28.
 */

var request = require('request');


var data = {
  "13": [
      {
          stationsName : "Norsborg",
          lat : 59.243809794148504,
          long : 17.814502716064453,
          id: 9280

      },
      {
          stationsName : "Hallunda",
          lat : 59.243283078799784,
          long : 17.82557487487793,
          id: 9281
      },
      {
          stationsName : "Alby",
          lat : 59.23950804735066,
          long : 17.84531593322754,
          id: 9282
      },
      {
          stationsName : "Fittja",
          lat : 59.24747462983112,
          long : 17.860937118530273,
          id: 9283
      },
      {
          stationsName : "Masmo",
          lat : 59.24969089616879,
          long : 17.88029193878174,
          id: 9284
      },
      {
          stationsName : "Vårby Gård",
          lat : 59.24969089616879,
          long : 17.88029193878174,
          id: 9285
      },
      {
          stationsName : "Vårberg",
          lat : 59.275945972748275,
          long : 17.890119552612305,
          id: 9286
      },
      {
          stationsName : "Skärholmen",
          lat : 59.27715186021687,
          long : 17.90698528289795,
          id: 9287
      },
      {
          stationsName : "Sätra",
          lat : 59.28500004778074,
          long : 17.921361923217773,
          id: 9288
      },
      {
          stationsName : "Bredäng",
          lat : 59.29484060848966,
          long : 17.933807373046875,
          id: 9289
      },
      {
          stationsName : "Mälarhöjden",
          lat : 59.300932001679385,
          long : 17.957282066345215,
          id: 9190
      },
      {
          stationsName : "Axelsberg",
          lat : 59.30437162317161,
          long : 17.97487735748291,
          id: 9291
      },
      {
          stationsName : "Örnsberg",
          lat : 59.30553269075799,
          long : 17.989168167114258,
          id: 9292
      },
      {
          stationsName : "Aspudden",
          lat : 59.306430847928155,
          long : 18.00114154815674,
          id: 9293
      },
      {
          stationsName : "Liljeholmen",
          lat : 59.31072414963127,
          long : 18.02311420440674,
          id: 9294
      },
      {
          stationsName : "Hornstull",
          lat : 59.31584911637725,
          long : 18.03401470184326,
          id: 9295
      },{
          stationsName : "Zinkensdamm",
          lat : 59.31779815309838,
          long : 18.050150871276855,
          id: 9296
      },{
          stationsName : "Mariatorget",
          lat : 59.31698789297579,
          long : 18.06324005126953,
          id: 9297
      },{
          stationsName : "Slussen",
          lat : 59.31952810332031,
          long : 18.072123527526855,
          id: 9192
      },{
          stationsName : "Gamla stan",
          lat : 59.32316290175916,
          long : 18.067617416381836,
          id: 9193
      },{
          stationsName : "T-Centralen",
          lat : 59.33014675465801,
          long : 18.058133125305176,
          id: 9287
      },{
          stationsName : "Östermalmstorg",
          lat : 59.334984256355895,
          long : 18.074054718017578,
          id: 9206
      },{
          stationsName : "Karlaplan",
          lat : 59.3385079755339,
          long : 18.09023380279541,
          id: 9222
      },{
          stationsName : "Gärdet",
          lat : 59.34776420420132,
          long : 18.101863861083984,
          id: 9221
      },{
          stationsName : "Ropsten",
          lat : 59.357302263204424,
          long : 18.10220718383789,
          id:9220
      }
  ],
    "a18" : [
        {
            stationsName : "Alvik",
            lat : 59.33363814292261,
            long : 17.980263233184814,
            id: 9112
        },{
            stationsName : "Kristineberg",
            lat : 59.33281731587193,
            long : 18.003158569335938,
            id: 9113
        },{
            stationsName : "Thorildsplan",
            lat : 59.3314820615028,
            long : 18.01487445831299,
            id:9114
        },{
            stationsName : "Fridhemsplan",
            lat : 59.33220441874238,
            long : 18.029165267944336,
            id:9115
        },{
            stationsName : "S:t Eriksplan",
            lat : 59.33966787765743,
            long : 18.036975860595703,
            id:9116
        },{
            stationsName : "Odenplan",
            lat : 59.34297228729138,
            long : 18.049850463867188,
            id:9117
        },{
            stationsName : "Rådmansgatan",
            lat : 59.34034629261624,
            long : 18.059163093566895,
            id:9118
        },{
            stationsName : "Hötorget",
            lat : 59.33533445598571,
            long : 18.063111305236816,
            id:9119
        },{
            stationsName : "T-centralen",
            lat : 59.33014675465801,
            long : 18.058133125305176,
            id:9001
        },{
            stationsName : "Gamla stan",
            lat : 59.32316290175916,
            long : 18.067617416381836,
            id:9193
        },{
            stationsName : "Slussen",
            lat : 59.31952810332031,
            long : 18.072123527526855,
            id: 9192
        },{
            stationsName : "Medborgarplatsen",
            lat : 59.31433798854039,
            long : 18.07353973388672,
            id:1323
        },{
            stationsName : "Skanstull",
            lat : 59.307832801957346,
            long : 18.07572841644287,
            id:9190
        },{
            stationsName : "Gullmarsplan",
            lat : 59.29904773036258,
            long : 18.080921173095703,
            id: 9189
        },{
            stationsName : "Skärmabrink",
            lat : 59.295366527173556,
            long : 18.090405464172363,
            id:9188
        },{
            stationsName : "Blåsut",
            lat : 59.2902603896592,
            long : 18.091049194335938,
            id:9187
        },{
            stationsName : "Sandsborg",
            lat : 59.284802769144875,
            long : 18.092379570007324,
            id:9186
        },{
            stationsName : "Skogskyrkogården",
            lat : 59.27921273266491,
            long : 18.09546947479248,
            id:9185
        },{
            stationsName : "Tallkrogen",
            lat : 59.27114392452408,
            long : 18.085298538208008,
            id:9184
        },{
            stationsName : "Gubbängen",
            lat : 59.26346801232758,
            long : 18.082079887390137,
            id:9183
        },{
            stationsName : "Hökarängen",
            lat : 59.257940284467615,
            long : 18.08246612548828,
            id:9182
        },{
            stationsName : "Farsta",
            lat : 59.24356838395701,
            long : 18.093280792236328,
            id:9181
        },{
            stationsName : "Farsta strand",
            lat : 59.23500819069744,
            long : 18.10173511505127,
            id:9182
        },


    ]
};

module.exports.getDataByLine = function (line) {
        return getListById(line);
}

module.exports.getIds = function(line){

        var objects = getListById(line);
        var returnObj = [];
        for(var i = 0; i < objects.length; i++){
            returnObj.push(objects[i].id);
        }

    return returnObj;

}


function getListById(line){
    if(line == "18"){
        return data.a18;
    }

}