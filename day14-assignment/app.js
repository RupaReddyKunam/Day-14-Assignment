// app.js
// Part B Q1: Set up Node.js project & run with node
// Part B Q2: Use mathModule from app.js (CommonJS import)

const math = require('./mathModule');

console.log("=== Node.js App Starter (Part B Q1 & Q2) ===");
console.log(`Adding 15 + 8 = ${math.add(15, 8)}`);
console.log(`Subtracting 25 - 9 = ${math.subtract(25, 9)}`);
console.log("==========================================");
