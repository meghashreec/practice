// The destructuring assignments syntax is a js expression that makes it possible to unpack values
//from arrays, or properties from objects, into distinct variables

//🔹 Array Destructuring
let arr = ["hi", "I", "am", "megha"];
let [a, b, c, d, e] = arr;

console.log(a); // "hi"
console.log(e); // undefined

//✅ Explanation:
//Destructuring uses the index of array elements.
//e becomes undefined because there is no 5th element in arr (index 4 doesn't exist).

//🔹 Object Destructuring
let myObj = {
  name: "adam",
  age: 25,
  gender: "M",
  address: {
    country: "England",
    city: "London",
  },
};

//let { f, g, h } = myObj;
//❌ This throws undefined because:
//f, g, and h are not valid keys in myObj.
// console.log(f)    will throw an error because we cannot destructure an object with different key names we have to pass the same names

// ✅ Correct Destructuring:
//This pulls properties with matching key names into variables:
//name = "adam"
//age = 25
//gender = "M"
let { name, age, gender } = myObj;

//✅ Destructuring with Aliases and Nested Objects:
let {
  name: n,
  age: ag,
  gender: g,
  address: { country, city },
} = myObj;

console.log(name);
console.log(ag); // 25
console.log(country); // "England"
//console.log(address.city); // ❌ Error: address is not defined

//name: n creates a new variable n = "adam" (aliasing)
//address: { country, city } destructures the nested object
//address.city won't work here directly, because address is not defined as a variable — only country and city are.

// ✅ Fix:
// If you still want to use address.city, you can destructure and keep address as a variable:
let {
  address,
  address: { country: co, city: ci },
} = myObj;

console.log(address.city); // "London"

//🧠 TL;DR – Destructuring Key Points
// | Feature        | Arrays            | Objects                |
// | -------------- | ----------------- | ---------------------- |
// | Syntax         | `[a, b, c] = arr` | `{ key } = obj`        |
// | Based on       | Index             | Key names              |
// | Default values | `[a=0] = []`      | `{ key = 0 } = {}`     |
// | Nested support | `[[a]] = [[1]]`   | `{ a: { b } } = obj`   |
// | Aliasing       | N/A               | `{ key: alias } = obj` |
