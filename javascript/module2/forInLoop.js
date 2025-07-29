//In js the for-In loop allows you to loop through the properties of an object
// The statements of code found within the loop will be executed once for each property of the object
// Purpose:
// Used to iterate over the enumerable properties (keys) of an object.

var colors = {
  primary: "blue",
  secondary: "red",
  tertiary: "white",
};

for (var color in colors) {
  console.log(colors[color]);
}
console.log(color, "=>", colors[color]);

// Warning: for...in over Arrays  It works, but it's not recommended for arrays.
//arrays are also objects in js
// Why not use for...in for arrays?
// It loops over all enumerable properties, not just indices.
// If the array has custom properties, they'll be included too.

var colorArray = ["yellow", "green", "black"];

for (var c in colorArray) {
  console.log(colorArray[c]);
}

// | Use Case           | Recommended Loop    |
// | ------------------ | ------------------- |
// | Object             | `for...in` ✅        |
// | Array              | `for`, `for...of` ✅ |
// | Array (with index) | `for` ✅             |
