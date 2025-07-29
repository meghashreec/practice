// ✅ Pure Functions
// A pure function always:
// Returns the same output for the same input
// Has no side effects (like modifying a global variable, DOM, or logging to the console)

function addPure(x, a) {
  //   console.log(x + a);  // external resorce (console)
  return x + a;
}
console.log(addPure(3, 2));
console.log(addPure(3, 2));
//do not use external factor that can change the o/p

// ❌ Impure Functions
// An impure function either:
// Depends on or modifies an external variable
// Causes side effects like console logging, API calls, or modifying data outside the function

var a = 4;
function addImpure(x) {
  console.log(x + a);
  a++;
}
addImpure(2);
addImpure(2);

// 🧠 Quick Tip
// Avoid inside a pure function:
// Using console.log, alert, Math.random(), Date.now()
// Changing or relying on external variables
// Modifying the arguments (arr.push(), obj.key = val, etc.)
