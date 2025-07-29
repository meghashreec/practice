//A function is a block of code that performs specific task or set of statements that perform a task
//it is executed when something invokes it
//cam call it when ever want

// Syntax
// declare
function demo() {
  //code
}
demo(); // invoking or calling a function

//Parameters and arguments
// A function can be defines with a set of parameters that it will take
//parameters are generally the values that we want the function to accept

//Arguments are the values that we pass for those parameters

function add(a, b) {
  console.log(a + b);
}
add(3, 5); // Output: 8
// Parameters → a, b (placeholders in the function definition)
// Arguments → 3, 5 (actual values passed when calling the function)

//Normal function
function greet() {
  console.log("hello");
} //fun declaration and defination

greet();

// 🧠 Summary:
// | Term       | Meaning                                       |
// | ---------- | --------------------------------------------- |
// | Function   | A block of code for a task                    |
// | Parameters | Placeholders used when defining a function    |
// | Arguments  | Actual values passed when invoking a function |
// | Hoisting   | JS moves function declarations to the top     |
