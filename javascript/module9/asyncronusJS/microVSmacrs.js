// 🧠 Microtasks vs Macrotasks in JavaScript
// JavaScript runs on a single thread, but it's asynchronous thanks to the event loop, which manages tasks, microtasks, and rendering.

// 🟦 Macrotasks (a.k.a. Tasks)
// These are scheduled in the task queue and include:

// Examples of Macrotasks
// setTimeout()
// setInterval()
// setImmediate() (Node.js)
// I/O events (e.g., file, network)
// UI rendering events

// 🟨 Microtasks
// These are higher priority and are scheduled in the microtask queue.

// Examples of Microtasks
// Promise.then()
// Promise.catch()
// Promise.finally()
// queueMicrotask()
// MutationObserver

// 🔁 Execution Order
// Execute main script (synchronous JS)

// Run all microtasks

// Perform rendering / UI updates

// Run one macrotask

// Repeat from step 2

// 🧠 Microtasks always run before the next Macrotask.

// 🔬 Example

console.log("1");

setTimeout(() => {
  console.log("2 (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3 (microtask)");
});

console.log("4");

// ⏱ Another Example (to test execution order):

setTimeout(() => console.log("macrotask - timeout"), 0);
queueMicrotask(() => console.log("microtask - queueMicrotask"));
Promise.resolve().then(() => console.log("microtask - promise"));

console.log("sync - end");
