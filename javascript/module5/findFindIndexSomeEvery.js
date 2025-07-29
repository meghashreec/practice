const transaction = [1000, 3000, 4000, 2000, -898, 3800, -4500];

//🔍 find()
// Returns the first element that satisfies the condition.
// If none matches, it returns undefined.

let firstWithdrawal = transaction.find((n) => n < 0);
console.log(firstWithdrawal); // Output: -898

// 🔢 findIndex()
// Returns the index of the first element that satisfies the condition.
// If none matches, it returns -1.

let firstWithdrawalIndex = transaction.findIndex((n) => n < 0);
console.log(firstWithdrawalIndex); // Output: 4

// ✅ some()
// Checks if at least one element passes the condition.
// Returns true or false.

let checkSome = transaction.some((n) => n < 0);
console.log(checkSome); // Output: true

// 🧪 every()
// Checks if all elements satisfy the condition.
// Returns true only if every element passes.

let resultEvery = transaction.every((n) => n < 0);
console.log(resultEvery); // Output: false

// | Method        | Returns                    | Stops at      | Use When...                                 |
// | ------------- | -------------------------- | ------------- | ------------------------------------------- |
// | `find()`      | First matching **element** | First match   | You need the actual **value**               |
// | `findIndex()` | First matching **index**   | First match   | You need the **position** of the match      |
// | `some()`      | `true/false`               | First `true`  | You want to know if **any** element matches |
// | `every()`     | `true/false`               | First `false` | You want to ensure **all** elements match   |
