//filter
//it returns a new array it will return all those elements that matches the specific condition
//if the condition is true it will return the elemen for that condition and if it is false it will discard that element

// What is .filter()?
// filter() creates a new array.
// It includes only the elements that pass the condition (i.e., return true from the callback).
// It does not mutate the original array.

//✅ Example 1: Filter Even Numbers
let num = [1, 2, 20, 35, 12, 17, 46];

let evenNum = num.filter(function (n) {
  return n % 2 == 0;
});

console.log(evenNum); // Output: [2, 20, 12, 46]

// ✅ Example 2: Filter Positive Transactions

const transaction = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let positive = transaction.filter(function (n) {
  return n > 0;
});

console.log(positive); // Output: [1000, 3000, 4000, 2000, 3800]
