const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
