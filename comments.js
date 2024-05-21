// Create web server  : node comments.js
// Access in browser : http://localhost:3000

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  console.log("Request received.");
  fs.readFile('./comments.json', 'utf8', function (err, data) {
    if (err) {
      console.log("Error reading file.");
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.end("Error: " + err);
      return;
    }
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(data);
  });
});

// Listen on port 3000, IP defaults to