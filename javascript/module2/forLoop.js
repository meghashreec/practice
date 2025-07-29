// Definition:
// Loops are used to perform a repetitive task based on a condition.
//loops are the statements that we can use to control a flow of the program to do some repeated task

var a = "hello world";

for (i = 0; i < 10; i++) {
  console.log(a);
}

//square of each element of an array

var arr = [2, 3, 4, 5];
var sqrarray = [];

for (var i = 0; i < arr.length; i++) {
  sqrarray.push(arr[i] * arr[i]);
}
console.log(sqrarray);
