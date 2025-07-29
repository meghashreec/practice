// 🔹 var Basics
var a = 20;
var a = 35; // ✅ Redeclaration is allowed with var

console.log(a); // Output: 35

//✅ Concept:
// var allows redeclaration within the same scope.
// Reassigns and overrides the previous value.

// 🔹 var is Function Scoped, NOT Block Scoped
if (a == 35) {
  var b = 40;
  console.log(b); // Output: 40
}
console.log(b); // ✅ Still accessible! Output: 40

//2.variables declared using var keyword are not block scoped they are function scoped
//❗Why?
// var b is not confined to the if block, it is hoisted to the surrounding function or global scope.
// That’s why you can access b outside the block — not possible with let or const.

// 🔹 var IS Scoped to Functions
// ✅ Explanation:
// Inside the function test(), var c is function-scoped.
// Trying to access c outside the function gives an error.

function test() {
  var c = 30;
  console.log(c);
}
test();
//console.log(c);
