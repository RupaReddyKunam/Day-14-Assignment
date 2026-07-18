// noteSaver.js
// Part E Q3: Simple file-based note saver program using fs

const fs = require('fs');
const path = require('path');

const notesFile = path.join(__dirname, 'notes.txt');

const args = process.argv.slice(2);
const command = args[0];
const noteContent = args[1];

function printUsage() {
  console.log("=== CLI Note Saver Tool (Part E Q3) ===");
  console.log("Usage:");
  console.log("  node noteSaver.js add \"Your note content here\"   - Save a new note");
  console.log("  node noteSaver.js read                          - List all saved notes");
  console.log("==========================================");
}

function addNote(content) {
  if (!content) {
    console.log("Error: Please provide note content inside quotes.");
    return;
  }
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ${content}\n`;
  
  fs.appendFileSync(notesFile, entry);
  console.log(`✓ Note saved successfully in: ${path.basename(notesFile)}`);
}

function readNotes() {
  if (!fs.existsSync(notesFile)) {
    console.log("No notes saved yet. Use 'add' command to create one.");
    return;
  }
  
  const content = fs.readFileSync(notesFile, 'utf8');
  console.log("\n=== Registered Notes ===");
  console.log(content.trim());
  console.log("========================");
}

// Logic flow
if (command === 'add') {
  addNote(noteContent);
} else if (command === 'read') {
  readNotes();
} else {
  printUsage();
  readNotes();
}
