const fs = require('fs');

fs.stat('.', (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(stats);
});