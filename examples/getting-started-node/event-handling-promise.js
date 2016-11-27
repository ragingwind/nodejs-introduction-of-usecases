const fs = require('fs');

function fsStatPromise(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        resject(err);
      }

      resolve(stats);
    });
  });
}

fsStatPromise('.').then(stats => {
  console.log(stats);
}).catch(err => {
  console.log(err);
});