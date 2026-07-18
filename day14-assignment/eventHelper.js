// eventHelper.js
// Part B Q5: Create an event emitter that emits and listens for an event

const EventEmitter = require('events');

class UserStatusEmitter extends EventEmitter {}

const userStatus = new UserStatusEmitter();

// Register event listeners
userStatus.on('login', (username) => {
  console.log(`[Event Received]: User "${username}" has logged in.`);
});

userStatus.on('logout', (username) => {
  console.log(`[Event Received]: User "${username}" has logged out.`);
});

console.log("=== Event Emitter Logs ===");
// Emit events
userStatus.emit('login', 'Rupa Reddy Kunam');
userStatus.emit('logout', 'Rupa Reddy Kunam');
console.log("==========================");
