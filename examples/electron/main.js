const {app, BrowserWindow} = require('electron');

// keep main window
let mainWindow;

app.on('ready', () => {
  // create browser
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  // load url
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});