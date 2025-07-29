//reduce
//Example 1: Sum of All Elements
let num = [1, 2, 3, 4, 10];
let result = num.reduce(function (acc, value) {
  let updatedSum = acc + value;
  return updatedSum;
}, 0);
console.log(result);
// acc is the accumulator (starts from 0 here)
// value is the current item in the array
// Final result: 1+2+3+4+10 = 20

// Example 2: Product of All Elements
let num1 = [1, 2, 3, 4, 10];
let result1 = num1.reduce(function (acc, value) {
  let updatedSum = acc * value;
  return updatedSum;
}, 1);
console.log(result1);
// acc starts at 1 (important for multiplication!)
// Final result: 1*2*3*4*10 = 240

// reduceRight();
// Example: Concatenate values in reverse
const arr = ["a", "b", "c", "d"];

const result11 = arr.reduceRight((acc, curr) => {
  return acc + curr;
}, "");

console.log(result11); // Output: "dcba"

// 🧠 When to use reduceRight()?
// When order matters and you need to process the array from end to start
// Useful for building right-associative structures, such as:

// ✅ Nested Object Example

const input = "a,b,c,d";
const keys = input.split(",");

const nested = keys.reduceRight((acc, key) => {
  return { [key]: acc };
}, undefined);

console.dir(nested, { depth: null });

// ✅ Difference between reduce() and reduceRight()
// | Function        | Direction    | Example Use Case                           |
// | --------------- | ------------ | ------------------------------------------ |
// | `reduce()`      | Left → Right | Summing values, flatten left-associative   |
// | `reduceRight()` | Right → Left | Nesting objects, flatten right-associative |
