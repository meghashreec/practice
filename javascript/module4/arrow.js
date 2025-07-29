let a = 2;

let test1 = () => console.log(a + 2); // uses outer variable 'a'
let test2 = (a) => console.log(a * 2); // takes 'a' as parameter
let test3 = (a, b) => {
  console.log(a + b);
}; // takes two parameters

test1(); // Output: 4
test2(4); // Output: 8
test3(2, 6); // Output: 8

// 🔗 Key Concepts Covered

// | Concept             | Explanation                                                    |
// | ------------------- | -------------------------------------------------------------- |
// | **Arrow Functions** | Compact way to define functions                                |
// | **Scope**           | Inner function parameters shadow outer variables               |
// | **Parameter Usage** | Arrow functions can have 0, 1, or many parameters              |
// | **Console Output**  | `console.log(...)` displays output in terminal/browser console |
