// fileHelper.js
// Part B Q3: Use the fs module to read, write, and append to a file

const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, 'output.txt');

console.log("=== File system operations ===");

// 1. Write file
fs.writeFileSync(targetFilePath, "Initial Line 1: Day 14 Node file system operations.\n");
console.log("-> Successfully wrote initial file: output.txt");

// 2. Append file
fs.appendFileSync(targetFilePath, "Appended Line 2: Learning Node path and os parameters.\n");
console.log("-> Successfully appended second line to: output.txt");

// 3. Read file
const fileContent = fs.readFileSync(targetFilePath, 'utf8');
console.log("\nReading file output.txt content:");
console.log("---------------------------------------");
console.log(fileContent);
console.log("---------------------------------------");
