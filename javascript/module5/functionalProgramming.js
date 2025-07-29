//Functional programming is a programming paradigm designed to handle functions in a better way in js
//js is a multi paradigm languare . we can use object oriented , procedural and functional programming paradigm at a same time

// 🔹 What is Functional Programming?
// Functional Programming is a programming paradigm (style of writing code) that treats functions as first-class citizens and emphasizes:
// Pure functions
// Immutability
// Function composition
// Avoiding side-effects

// 🔹 JavaScript = Multi-Paradigm Language
// JavaScript supports:
// Object-Oriented Programming (OOP) → using classes, objects, prototypes
// Procedural Programming → using functions, if-else, loops
// Functional Programming → using higher-order functions, immutability, recursion

// 🔹 Core Concepts of Functional Programming
// Concept	Description
// Pure Functions	Output depends only on input; no side-effects
// Immutability	Don’t mutate original data; return new copies
// First-Class Functions	Functions can be passed, returned, and assigned like values
// Higher-Order Functions	Functions that take or return other functions
// Function Composition	Combine smaller functions into bigger logic

// 🔹 Example: Functional Style

const nums = [1, 2, 3, 4, 5];

// Imperative (procedural) way
let squared = [];
for (let i = 0; i < nums.length; i++) {
  squared.push(nums[i] * nums[i]);
}

// Functional way
const squaredFP = nums.map((n) => n * n);
console.log(squaredFP); // [1, 4, 9, 16, 25]

// ✅ Why Use Functional Programming?
// Cleaner code
// Better testing/debugging
// Fewer bugs due to fewer side effects
// Easy to reason about logic
