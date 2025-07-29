// ✅ What is a Function Expression?
// In JavaScript, a function expression is when a function is assigned to a variable:

//fun which doesn't have a name is called as anonymous function

var a = function (a, b) {
  return a + b;
};
// This function is anonymous (has no name).
// It is assigned to the variable a.
// You can now call this function using a().

let result = a(3, 4);

console.log(result);
// The function a takes two arguments and returns their sum.
// a(3, 4) evaluates to 7, which gets stored in result.

// 🧠 Why Use Function Expressions?
// Allows storing functions in variables.
// Useful for passing functions as arguments (e.g., in callbacks).
// Can define functions conditionally or inside other functions.
