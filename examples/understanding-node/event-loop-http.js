// let's run with command below
// curl http://localhost:8080/
// and
// ab -n 500 -c 500 http://127.0.0.1:8080/

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello\n');

  setTimeout(() => {
    res.end('world\n');
  }, 2000);
});

server.on('clientError', (err, s) => {
  s.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(8080, () => {
  console.log('Server has been started', server.address());
});