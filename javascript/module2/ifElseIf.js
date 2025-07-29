// 1.if Statement
// Used to execute a block of code if a condition is true.
var myScore = 92;
if (myScore > 90) {
  console.log("got bicycle");
} else {
  console.log("better luck next time");
}
// 2. if...else if...else Ladder
// Used when you need to check multiple conditions in sequence.

var std = 95;
if (std > 90) {
  console.log("A grade");
} else if (std > 75 && std <= 90) {
  console.log("B grade");
} else {
  console.log("C grade");
}

//Notes:
// The if block runs only if the condition is true.

// Use else if for additional conditions.

// else runs if none of the above conditions are true.

// You can use logical operators like &&, ||, ! inside conditions.
