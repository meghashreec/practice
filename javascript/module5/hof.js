//HOF are fun that operate on other funtions , either by taking them as arguments or by returning them
//in simple words higher order fun is a fun that receives a fun as an arguments or returns them as output

// 🔹 What are Higher-Order Functions (HOFs)?
// A Higher-Order Function is a function that either takes another function as an argument or returns a function as a result.
// These are super common in JavaScript and form the backbone of functional programming in JS.

let arr = [1, 2, 3, 4, 5];
let sqArr = [];

for (let i = 0; i < arr.length; i++) {
  sqArr.push(arr[i] * arr[i]);
}
console.log(sqArr);

//Map:which will loop through every element of your arr and will perform specific operations that you have provided
// map will always return a new array with your results

// ✅ 1. map() — Transforms and returns a new array
const num = [1, 3, 5];
const sqr = num.map(function (n) {
  return n * n;
});
console.log(sqr);

//foreach:doesnt returns anything just values and have to console log it cannot access outside by returning them
// ✅ 2. forEach() — Iterates, but doesn't return anything
const trasactions = [1000, 1008, 1900];
const dollor = 80;
let transactionDollar = trasactions.forEach((amount) => {
  console.log((amount / dollor).toFixed(0));
});
// console.log(transactionDollar);
