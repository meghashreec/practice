// A while loop evaluates the condition inside the parentheses ().
// If the condition is true, the code inside the loop runs.
// Then the condition is checked again.
// This repeats until the condition becomes false.

//while
var i = 1;
var n = 10;
while (i <= n) {
  console.log(i);
  i++;
}

// A do...while loop will execute the code block **at least once**,
// even if the condition is false at the beginning.

var a = 5;
var num = 10;

do {
  console.log(a);
  a++;
} while (a <= num);

// | Feature           | `while` Loop                          | `do...while` Loop         |
// | ----------------- | ------------------------------------- | ------------------------- |
// | Condition Checked | Before executing the block            | After executing the block |
// | Minimum Execution | 0 times (if condition is false first) | At least 1 time           |

// do...while executes even if condition is false
var x = 20;

do {
  console.log("This runs once even if x > 10");
} while (x < 10);
