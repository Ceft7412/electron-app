// Imported 2 modules using CommonJS module syntax.
// app controls the application's event lifecycle.
// BrowserWindow creates and manages the app windows.

const { app, BrowserWindow } = require("electron");

// path module from node.
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile("index.html");
};

// BrowserWindows can only be created after the app module's ready event is fired.
app.whenReady().then(() => {
  createWindow();
});

// This will listen to an event when all windows are closed
// Window-all-closed event will emit a callback function that will truly quit the app.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
