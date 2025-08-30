// Extermal Modules
// You can also import modules from external libraries installed via npm.

const os = require("os")
console.log(os.platform()); // e.g., 'win32', 'linux', 'darwin'
console.log(os.arch()); // e.g., 'x64', 'arm'
console.log(os.totalmem()); // Total system memory in bytes
console.log(os.freemem()); // Free system memory in bytes
console.log(os.cpus()); // Information about each CPU/core installed

