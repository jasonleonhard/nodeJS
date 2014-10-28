var http = require('http');

var s = http.createServer(function (req, res) {
  console.log("I recieved a request");
  res.end("Hey, thank you for calling!");
});

s.listen(8080);

