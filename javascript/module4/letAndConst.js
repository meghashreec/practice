//🔹 let Keyword
let a = 10; // ✅ Declaration with let
a = 2; // ✅ Re-assignment allowed

if (a == 10) {
  let b = 40; // b is declared using let — block scoped
  console.log(b); // ✅ Works inside the block
}

// console.log(b); ❌ ReferenceError: b is not defined

//✅ Summary:
//| Feature       | `let`          |
// | ------------- | -------------- |
// | Redeclaration | ❌ Not allowed  |
// | Re-assignment | ✅ Allowed      |
// | Scope         | ✅ Block-scoped |

//🔹 const Keyword

const pi = 3.142; // ✅ Declaration with const
// pi = 3;         ❌ TypeError: Assignment to constant variable
console.log(pi); // ✅ Works fine

// ✅ Summary:
// | Feature       | `const`        |
// | ------------- | -------------- |
// | Redeclaration | ❌ Not allowed  |
// | Re-assignment | ❌ Not allowed  |
// | Scope         | ✅ Block-scoped |

// 🔍 Scope Example Summary:

if (true) {
  let x = 5;
  const y = 10;
  console.log(x, y); // ✅ Works: block scoped
}

console.log(x); // ❌ ReferenceError
console.log(y); // ❌ ReferenceError

// 📌 Comparison: var vs let vs const
// | Feature       | `var`           | `let`       | `const`       |
// | ------------- | --------------- | ----------- | ------------- |
// | Scope         | Function        | Block       | Block         |
// | Hoisting      | Yes (undefined) | Yes (TDZ)   | Yes (TDZ)     |
// | Redeclaration | ✅ Yes           | ❌ No        | ❌ No          |
// | Re-assignment | ✅ Yes           | ✅ Yes       | ❌ No          |
// | Use Case      | Avoid           | Recommended | For constants |
