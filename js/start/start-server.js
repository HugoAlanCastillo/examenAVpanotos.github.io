const { exec } = require('child_process');
const os = require('os');
const path = require('path');

function startServer() {
  const serverCommand = os.platform() === 'win32' ? 'http-server.cmd' : 'http-server';
  const scriptPath = path.resolve(__dirname, serverCommand);

  exec(scriptPath, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting server: ${error.message}`);
      return;
    }
    console.log(stdout);
  });
}

startServer();
