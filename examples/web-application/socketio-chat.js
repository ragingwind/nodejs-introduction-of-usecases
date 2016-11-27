const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();

// add express app to http as one of listener
const server = http.Server(app);
const io = socketIO(server);

// bind a path for socket.io.js
app.use('/socket-io', express.static(path.join(__dirname, '../node_modules/socket.io-client')));

// serving index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/socketio-chat.html'));
});

io.on('connection', s => {
  console.log('a user connected');

  s.on('disconnect', () => {
    console.log('user disconnected');
  });

  s.on('chat', msg => {
    console.log('broadcast a msg', msg);
    io.emit('chat', msg);
  });
});

server.listen(8080, () => {
  console.log('Server has been started', server.address());
});