'use strict'
let http = require('http');
let server = http.createServer(function (req, res) {
  if( req.method === 'GET' ) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
		console.log(`Request Received`)
  } else {
    res.writeHead(405, {'Content-Type': 'text/plain'});
    res.end('Error');
		console.log('NOT WORKING')
  }
});
server.listen(3000);
console.log('Server running on port 8000');