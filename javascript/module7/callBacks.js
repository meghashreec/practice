const fs = require("fs");

console.log("FirstLine");
let data1 = fs.readFileSync("f1.txt"); // will work sync

console.log(`file1 data ${data1}`);

let data2 = fs.readFileSync("f2.txt");
console.log(`file2 data ${data2}`);
console.log("LastLine");

fs.readFile("f1.txt", cb1);
function cb1(err, data) {
  if (err) {
    console.log("error");
  }
  console.log(`file 1 data ${data}`);
}

fs.readFile("f2.txt", cb2);
function cb2(err, data) {
  if (err) {
    console.log("error");
  }
  console.log(`file 2 data ${data}`);
}
