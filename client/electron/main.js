const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')
const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

const dev = false // process.argv.contains('development')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    }
  })

  let indexPath = ''

  if (dev) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:3000',
      pathname: 'calculator.html',
      slashes: 'true'
    })
  } else {
    console.log(__dirname)
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'calculator.html'),
      slashes: true
    })
  }

  // and load the index.html of the app.
  // win.loadFile('../calculator.html')
  win.loadURL(indexPath)

  // Open the DevTools.
  win.webContents.openDevTools()
}

if (dev) {
  app.whenReady().then(() => {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err))
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
