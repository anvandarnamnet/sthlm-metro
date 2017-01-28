/**
 * Created by Oskar on 2017-01-28.
 */
var restify = require('restify');

function respond(req,res,next) {
    res.send('HI!! ' + req.params.name);
    next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8000, function(){

});