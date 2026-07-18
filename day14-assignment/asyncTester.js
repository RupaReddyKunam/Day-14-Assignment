// asyncTester.js
// Part D Q1-5: Asynchronous Flows and Sync vs Async Comparisons

const fs = require('fs');
const path = require('path');

const sampleFile = path.join(__dirname, 'async_sample.txt');

// Initialize sample file
fs.writeFileSync(sampleFile, "Hello from the async tester file.\n");

// ==========================================
// Part D Q4: Function returning a promise that resolves after a delay
// ==========================================
function delayTimer(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved successfully after ${ms}ms delay.`);
    }, ms);
  });
}

// ==========================================
// Part D Q1: Asynchronous file read with callback
// ==========================================
function readWithCallback(callback) {
  fs.readFile(sampleFile, 'utf8', (err, data) => {
    if (err) return callback(err);
    callback(null, data);
  });
}

// ==========================================
// Part D Q2: Asynchronous file read with Promise
// ==========================================
function readWithPromise() {
  return fs.promises.readFile(sampleFile, 'utf8');
}

// ==========================================
// Part D Q3: Asynchronous file read with Async/Await
// ==========================================
async function readWithAsyncAwait() {
  try {
    const data = await fs.promises.readFile(sampleFile, 'utf8');
    return data;
  } catch (err) {
    console.error("Async/Await Error:", err);
    throw err;
  }
}

// ==========================================
// Part D Q5: Demonstration of Sync vs Async Order
// ==========================================
function demonstrateSyncVsAsync() {
  console.log("\n--- Part D Q5: Sync vs Async Order Demo ---");
  
  // 1. Sync file read
  console.log("[Sync Reading] Start Sync Read...");
  const dataSync = fs.readFileSync(sampleFile, 'utf8');
  console.log("[Sync Reading] Finished! Content:", dataSync.trim());
  console.log("[Sync Reading] Moving to next instruction.");

  console.log("\n[Async Reading] Start Async Read...");
  // 2. Async file read
  fs.readFile(sampleFile, 'utf8', (err, data) => {
    if (err) throw err;
    console.log("[Async Reading] Callback Fired! Content:", data.trim());
  });
  console.log("[Async Reading] Moving to next instruction (Non-blocking: this logs BEFORE the callback fires!).");
}

// Main execution flow
async function runAllTests() {
  console.log("=== Node.js Asynchronous Tester ===");

  // Run Sync vs Async comparison first
  demonstrateSyncVsAsync();

  // Wait a moment for async logs to settle
  await delayTimer(100);

  console.log("\n--- Part D Q1: Callback read ---");
  readWithCallback((err, data) => {
    if (err) console.error(err);
    console.log("Callback read result:", data.trim());
  });

  await delayTimer(50);

  console.log("\n--- Part D Q2: Promises (.then/.catch) read ---");
  readWithPromise()
    .then(data => console.log("Promise read result:", data.trim()))
    .catch(err => console.error(err));

  await delayTimer(50);

  console.log("\n--- Part D Q3: Async/Await read ---");
  const asyncVal = await readWithAsyncAwait();
  console.log("Async/Await read result:", asyncVal.trim());

  console.log("\n--- Part D Q4: Resolving after a delay ---");
  console.log("Starting 200ms delay...");
  const delayMsg = await delayTimer(200);
  console.log(delayMsg);
  
  console.log("\n====================================");
}

runAllTests();
