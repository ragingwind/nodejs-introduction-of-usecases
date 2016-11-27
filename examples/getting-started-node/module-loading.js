const fs = require('fs');
const lib = require('./lib');

fs.stat('.', (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('2. fs result', stats);
})

console.log('1. module import/export result', lib());