var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html','ascii', function(err, data) {
    if (err) throw err;
    console.log(data.toString());
    response.send(data.toString());
  });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
