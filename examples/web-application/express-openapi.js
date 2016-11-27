const path = require('path');
const express = require('express');
const routes = require('./routes');

const app = express();

// set header to allow  
app.use(function (req, res, next) {
  // website address to be able to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // methods to be able to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  next();
});

// load the router for v2
app.use('/v2', routes);

app.get('/about', (req, res) => {
	res.send('1.0.0');
});

// ?, +, *, and () are subsets of their regular expression counterparts
app.get(/@.*/, (req, res) => {
	res.send(req.originalUrl.replace(/^\/@/, ''));
});

// route with params to get user info
app.get('/users/:userId', (req, res) => {
  res.json(req.params);
});

// post params to create user
// to test: curl -X POST http://localhost:8080/users/ragingwind
app.post('/users/:userId', (req, res) => {
  res.send(req.params);
});

// start listening
app.listen(8080); 