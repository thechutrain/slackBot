var slack = require("slack-node");
var express = require('express');
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

function sendMessage(urlObject){
    slack = new slack();
    slack.setWebhook(urlObject.response_url);

    var userText = urlObject.text;

    // slack's webhook
    slack.webhook({
        channel: urlObject.channel_name,
        text: "hello you typedL " + userText,
    }, function(err, response){
        if (err){
            console.log(err);
        }
    }); // closes webhook
} // closes sendMessage Function