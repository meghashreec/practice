function add(a, b) {
  console.log(a + b);
}
function sub(a, b) {
  console.log(a - b);
}
function div(a, b) {
  console.log(a / b);
}
function mul(a, b) {
  console.log(a * b);
}

module.exports = {
  addition: add,
  subtraction: sub,
  multiplication: mul,
  division: div,
};

// What is a Module?
// A module is a file that contains related code (functions, variables, classes) and exports it to be reused elsewhere. It helps organize code logically and keeps things clean, maintainable, and reusable.
// 🧠 Think of a module as:
// A self-contained unit of code that can be imported and used in other files.
// 🎯 What is Modularity
// Modularity is the principle of breaking a large program into smaller, independent, and interchangeable pieces (modules). Each module does one thing well.
