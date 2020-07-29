const glasstron = require("glasstron");
const electron = require("electron");
electron.app.commandLine.appendSwitch("enable-transparent-visuals");
electron.app.on("ready", () => {
  setTimeout(
    spawnWindow,
    process.platform == "linux" ? 1000 : 0
    // Electron has a bug on linux where it
    // won't initialize properly when using
    // transparency. To work around that, it
    // is necessary to delay the window
    // spawn function.
  );
});

function spawnWindow() {
  win = new glasstron.BrowserWindow({
    width: 800,
    height: 800,
    // ...
  });
  win.blurType = "blurbehind";
  //              ^~~~~~~
  // Windows 10 1803+; for older versions you
  // might want to use 'blurbehind'
  win.setBlur(true);
  // ...
  return win;
}
