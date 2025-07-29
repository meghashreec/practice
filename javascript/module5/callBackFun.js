//A callback function is a function that is passed into another func as an argument , this function can then be invoked ata later stage of time
//since in js , fun are objects func can be passed as arguments

//🔹 Definition:
// A callback function is:
// A function passed as an argument to another function, which is then invoked inside that outer function.
// 🔹 Why are they useful?
// They allow asynchronous behavior (like handling API calls, setTimeout, etc.).
// Promote reusability and modularity of code.

function printFirstName(firstName, cb) {
  console.log(firstName); // prints: steve
  cb("Rogers"); // calls printLastName("Rogers")
}

function printLastName(lastName) {
  console.log(lastName); // prints: Rogers
}

printFirstName("steve", printLastName);
//✔️ printLastName is passed as a callback to printFirstName.

const isEven = (n) => {
  return n % 2 === 0;
};

let printResult = (evenFn, num) => {
  const isNumEven = evenFn(num); // calling the callback
  console.log(`The number is ${num} and is even: ${isNumEven}`);
};

printResult(isEven, 16); // Output: The number is 16 and is even: true
//✔️ Here, isEven is passed as a callback to printResult.

// 💡 Key Point:
// In JavaScript, functions are first-class citizens, which means:
// You can assign them to variables
// Pass them as arguments
// Return them from other functions
