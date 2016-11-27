const fs = require('fs');

fs.readdir('.', (err, files) => {
  const ul = document.querySelector('#files');
  ul.innerHTML = files.map(f => {
    return `<li>${f}</li>`;
  }).join('\n');
});