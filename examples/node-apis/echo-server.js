const net = require('net');

const opt = {
  port: 8080
};

const server = net.createServer(s => {
  console.log('client connected');
  
  // handle closing connection
  s.on('end', () => {
    console.log('client disconnected');
  });
   
   // write welcome message
   s.write('hello\n\n');

   // echo message come from client
   s.pipe(s);

}).on('error', err => {
  throw err;
});

server.listen(opt, () => {
  console.log('Server has been started', server.address());
})