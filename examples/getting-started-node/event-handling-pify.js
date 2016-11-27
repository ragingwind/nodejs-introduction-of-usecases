const fs = require('fs');
const pify = require('pify');

const fsp = pify(fs);

fsp.stat('.').then(stats => {
  console.log(stats);
}).catch(err => {
  console.error(err);
});

// it will raise an exception
fsp.stat('/Unknown').then(stats => {
  console.log(stats);
}).catch(err => {
  console.error(err);
});