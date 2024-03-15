'use strict'
let http = require('http');

var AppVersion = "1.0.2"


let server = http.createServer(function (req, res) {
  if( req.method === 'GET' ) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(AppVersion);
		console.log(`Request Received, Response sent`)
  } else {
    res.writeHead(405, {'Content-Type': 'text/plain'});
    res.end('501');
		console.log('NOT WORKING')
  }
});
server.listen(3000);
console.log('Server running on port 3000');