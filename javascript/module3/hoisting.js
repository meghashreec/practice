//  JavaScript Execution Context
// When JavaScript runs your code, it does so in two phases:

// 🔹 1. Memory Creation Phase (also called "Creation Phase")
// JS scans the code and allocates memory for variables and functions.

// Variables declared with var are initialized to undefined.

// Function declarations (not expressions) are hoisted with their full definitions.

console.log(a); // undefined
greet(); // "hello"
add(2, 5); // ❌ Error: add is not a function

var a = 10;

function greet() {
  console.log("hello");
}

var add = function (a, b) {
  return a + b;
};

var result = add(3, 4);
console.log(result); // 7

// 2. Code Execution Phase
// Code runs line-by-line.

// Variables get the values assigned.

// Functions are invoked.

// | Type                 | Hoisted | Value in Memory Phase    | Usable Before Declaration |
// | -------------------- | ------- | ------------------------ | ------------------------- |
// | `var`                | ✅ Yes   | `undefined`              | ✅ but gives `undefined`   |
// | Function Declaration | ✅ Yes   | Full function definition | ✅ yes                     |
// | Function Expression  | ✅ Yes   | `undefined`              | ❌ No, will throw error    |

// Function Expression Benefit
// Function expressions are not hoisted with their body, which means:

console.log(sum(2, 3)); // ❌ Error

var sum = function (a, b) {
  return a + b;
};
// This helps avoid accidental usage before declaration and encourages more predictable code execution.
