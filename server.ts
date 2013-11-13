/// <reference path="./.references/node.d.ts" />
var http = require('http');
import test = require('sayings');

var greeter = new test.Sayings.Greeter("world");


var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(greeter.greet()+', do you read me?\n');
}).listen(port);