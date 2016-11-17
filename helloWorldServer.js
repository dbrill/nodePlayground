/* This is about the simplest possible example of an Http server written in node
   This example can be found on the node.js 7.1.0 docs
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 1227;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
