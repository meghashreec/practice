const fs = require("fs");
fs.readFile("f1.txt", cb1);
function cb1(err, data) {
  if (err) {
    console.log("error");
  }
  console.log(`file 1 data ${data}`);
  fs.readFile("f2.txt", cb2);
}

function cb2(err, data) {
  if (err) {
    console.log("error");
  }
  console.log(`file 2 data ${data}`);
  fs.readFile("f3.txt", cb3);
}

function cb3(err, data) {
  if (err) {
    console.log("error");
  }
  console.log(`file 3 data ${data}`);
}
