// sysInfo.js
// Part E Q5: Build a small "system info" tool using the os module

const os = require('os');

console.log("=== System Information Tool (Part E Q5) ===");
console.log(`Platform: ${os.platform()}`);
console.log(`Release: ${os.release()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`CPU Count: ${os.cpus().length} cores`);
console.log(`CPU Model: ${os.cpus()[0]?.model || "Unknown"}`);
console.log(`Total Memory: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB`);
console.log(`Uptime: ${(os.uptime() / 3600).toFixed(2)} hours`);
console.log("===========================================");
