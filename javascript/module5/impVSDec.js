// 🔸 Imperative Programming
// Focuses on how to achieve a result
// You give step-by-step instructions
// You manage control flow with conditionals, loops, variables, etc.

// 🔸 Declarative Programming
// Focuses on what you want to achieve
// More concise, expressive, and readable
// Leverages built-in functions, expressions, or abstractions

//check that if the square of that number is even or not

//imperative way
const a = 5;
const asqure = a * a;
let isEven;

if (asqure % 2 == 0) {
  isEven = true;
} else {
  isEven = false;
}
console.log(isEven);

//Declarative
const checkForSquare = (x) => ((x * x) % 2 == 0 ? true : false);
console.log(checkForSquare(4));
