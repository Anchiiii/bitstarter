var express = require('express');
var buffer = require('buffer');
var fs = require('fs');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
var buff = fs.readFileSync("index.html");
response.send(buff.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
