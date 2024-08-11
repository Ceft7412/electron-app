// Imported 2 modules using CommonJS module syntax.
// app controls the application's event lifecycle.
// BrowserWindow creates and manages the app windows.

const { app, BrowserWindow } = require("electron");



const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadFile("index.html");
};

// BrowserWindows can only be created after the app module's ready event is fired.
app.whenReady().then(() => {
  createWindow();
});
