// Non-Mutating Methods

// at(index);
// Returns the element at the given index (supports negative index).
const arr1 = [10, 20, 30];
console.log("at", arr1.at(-1)); // 30

// concat();
// Combines arrays without modifying originals.
const a = [1, 2];
const b = [3, 4];
console.log("concat", a.concat(b)); // [1, 2, 3, 4]

// entries()
// Returns an iterator of [index, value] pairs.
const arr2 = ["a", "b"];
for (let [i, v] of arr2.entries()) {
  console.log("entries", i, v);
}

// every();
// Checks if all elements satisfy a condition.
console.log(
  "every",
  [2, 4, 6].every((x) => x % 2 === 0)
); // true

// filter()
// Creates a new array with elements that pass a condition.

console.log(
  "filter",
  [1, 2, 3, 4].filter((x) => x > 2)
); // [3, 4]

// find()
// Returns the first matching element.
console.log(
  "find",
  [1, 2, 3].find((x) => x > 1)
); // 2

// findIndex()
// Returns the index of the first match.
console.log(
  "findIndex",
  [1, 2, 3].findIndex((x) => x > 1)
); // 1

// findLast();
// Returns the last matching element (ES2023+).
console.log(
  "findLast",
  [1, 2, 3, 2].findLast((x) => x === 2)
); // 2

// findLastIndex()
// Returns index of the last matching item (ES2023+).
console.log(
  "findLastIndex",
  [1, 2, 3, 2].findLastIndex((x) => x === 2)
); // 3

// flat(depth)
// Flattens nested arrays.
console.log("flat", [1, [2, [3]]].flat(2)); // [1, 2, 3]

// // flatMap()
// // Like map() followed by flat(1).

// // [1, 2].flatMap(x => [x, x * 2]); // [1, 2, 2, 4]

// // forEach()
// // Iterates without returning anything.
// // [1, 2, 3].forEach((x) => console.log(x));

// includes()
// Checks for presence of a value.
console, log("includes", [1, 2, 3].includes(2)); // true

// indexOf()
// Returns the first index of an item, or -1.
console.log("indexOf", [1, 2, 3].indexOf(2)); // 1

// join(separator)
// Joins array into string.
console.log("join", ["a", "b", "c"].join("-")); // "a-b-c"

// keys()
// Returns an iterator of indexes.
for (let k of [10, 20].keys()) {
  console.log("keys", k); // 0, 1
}

// lastIndexOf()
// Finds the last occurrence index.
console.log("lastIndex", [1, 2, 1, 4, 1].lastIndexOf(4)); // 2

// map()
// Returns a new array after transforming each element.
console.log(
  "map",
  [1, 2, 3].map((x) => x * 2)
); // [2, 4, 6]

// // reduce()
// // Reduces the array to a single value.
// [1, 2, 3].reduce((a, b) => a + b, 0); // 6

// // reduceRight()
// // Same as reduce but right to left.
// ["a", "b", "c"].reduceRight((a, b) => a + b); // "cba"

// // slice(start, end)
// // Returns a sliced copy (not inclusive of end).
// [1, 2, 3, 4].slice(1, 3); // [2, 3]

// some()
// Checks if any element satisfies a condition.
console.log(
  "some",
  [1, 2, 3].some((x) => x > 2)
); // true

// toLocaleString() / toString()
// Converts array to string.
console.log("toString", [1, 2].toString()); // "1,2"

// // toReversed(), toSorted(), toSpliced(), with() (ES2023+)
// // All return copies without mutating:
// // [3, 1, 2].toSorted(); // [1, 2, 3]
// // [1, 2, 3].toReversed(); // [3, 2, 1]
// // [1, 2, 3].with(1, 9); // [1, 9, 3]
// // [1, 2, 3, 4].toSpliced(1, 2); // [1, 4]

// // Mutating Methods
// // copyWithin(target, start, end)
// // Copies a sequence within the array.

// [1, 2, 3, 4].copyWithin(1, 2); // [1, 3, 4, 4]

// // fill(value, start, end)
// // Fills with a static value.
// [1, 2, 3].fill(0, 1); // [1, 0, 0]

// pop()
// Removes the last item.
let a1 = [1, 2, 3];
a1.pop(); // a = [1, 2]

// push()
// Adds to the end.
let a2 = [1];
a2.push(2); // [1, 2]

// reverse()
// Reverses in place.
[1, 2].reverse(); // [2, 1]

// shift()
// Removes the first item.

[1, 2].shift(); // [2]

// sort()
// Sorts in place.
[3, 1, 2].sort(); // [1, 2, 3]

// // splice(start, deleteCount, ...items)
// // Removes/replaces/adds elements.

// [1, 2, 3].splice(1, 1, 9); // [1, 9, 3]

// unshift()
// Adds items at the beginning.
let a3 = [2, 3];
a3.unshift(1); // [1, 2, 3]

// values()
// Returns an iterator of values.
for (let v of [10, 20].values()) {
  console.log("values", v); // 10, 20
}

// let input = "a,b,c,d";
// let keys = input.split(",");
// // const result = keys.reducerRight((acc, keys)) => ({ [keys]: acc });

// console.log(keys);
