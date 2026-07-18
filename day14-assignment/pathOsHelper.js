// pathOsHelper.js
// Part B Q4: Use the path and os modules and print their outputs

const path = require('path');
const os = require('os');

console.log("=== OS Module Outputs ===");
console.log(`Platform: ${os.platform()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`CPU Count: ${os.cpus().length}`);
console.log(`Free Memory: ${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB`);
console.log(`Total Memory: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`);
console.log(`Home Directory: ${os.homedir()}`);

console.log("\n=== Path Module Outputs ===");
const samplePath = '/users/project/src/index.js';
console.log(`Sample Path: ${samplePath}`);
console.log(`Base name: ${path.basename(samplePath)}`);
console.log(`Directory name: ${path.dirname(samplePath)}`);
console.log(`Extension name: ${path.extname(samplePath)}`);
console.log(`Resolved Absolute path: ${path.resolve('src/index.js')}`);
console.log("===========================");
