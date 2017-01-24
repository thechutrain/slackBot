var slack = require("slack");
var express = requrie('express');
var url = require('url');

// Setting up App
var app = express();

app.set('port',  (process.env.PORT || 5000));

app.listen(app.get("port"));

app.get('/', function(request, response){
    var urlObject = url.parse(request.url, true).query;
    console.log(urlObject);
    sendMessage(urlObject)
}); // closes app.get