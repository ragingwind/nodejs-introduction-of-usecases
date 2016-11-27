const path = require('path');
const express = require('express');
const app = express();

const indexHTML = `<html>
<head>
</head>
<body>
  <h1>Hello express.js</h1>
  <img src="/static/express.png"/>
</body>
</html>`;

// mount specific middleware
app.use('/static', express.static(path.join(__dirname, 'public')));

// basic routing
app.get('/', (req, res) => {
	res.send(indexHTML);
});

// start listening
app.listen(8080);