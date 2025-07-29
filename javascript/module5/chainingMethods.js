let arr = [
  { name: "A", age: 14, gender: "M" },
  { name: "B", age: 34, gender: "M" },
  { name: "C", age: 24, gender: "F" },
  { name: "D", age: 44, gender: "F" },
  { name: "E", age: 44, gender: "M" },
  { name: "F", age: 28, gender: "M" },
  { name: "G", age: 36, gender: "F" },
  { name: "H", age: 47, gender: "F" },
];

let result = arr
  .filter(function (n) {
    return n.gender == "M";
  })
  .map(function (obj) {
    return obj.age;
  });
console.log(result);
