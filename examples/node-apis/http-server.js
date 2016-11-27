const http = require('http');

const indexHTML = `<html>
<head>
</head>
<body>
  <div>Hello</div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(indexHTML);
});

server.on('clientError', (err, s) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(8080, () => {
  console.log('Server has been started', server.address());
});