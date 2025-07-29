//undefined : js will assign undefined if your are not explicitly assigning any value to the variable

let a;
console.log(a);

let arr = [1, 2, 3, , 5];
console.log(arr[3]);

function add(a, c) {
  let c = a + b;
  return c; // if this is not present then o/p is undefined: if we do not have return type for any fun
}

let sum = add(2, 3);
console.log(sum);

//null:explicit value that has been assigned this particular var has no value

let myLife = null;
console.log(myLife);

//not Defined
// we havent been defined that stuff

// console.log(b);
