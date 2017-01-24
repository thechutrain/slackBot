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

function sendMessage(urlObject){
    slack = new Slack();
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