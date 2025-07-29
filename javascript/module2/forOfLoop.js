//the for-of statements create a loop iterating over iterable object
//including : built-in string,array,array-like objects like nodelist and also map and set

// 1.Looping Over an Array
var scores = [60, 90, 80, 75];

for (var score of scores) {
  console.log(score);
}

// how to get index
// there is a method ->entries
// 2. Getting Index with .entries()

let colors = ["red", "blue", "green"];

for (var [index, color] of colors.entries()) {
  console.log(index, "->", color);
}

//  3. Looping Over a String

var str = "megha";

for (var c of str) {
  console.log(c);
}

// | Feature        | `for...in`                     | `for...of`                             |
// | -------------- | ------------------------------ | -------------------------------------- |
// | Use with       | Objects (keys)                 | Iterables (values) like arrays/strings |
// | Returns        | Keys (index or property names) | Values directly                        |
// | Use on arrays? | ❌ Not recommended              | ✅ Preferred                            |
