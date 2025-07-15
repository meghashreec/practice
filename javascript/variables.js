### variables are containers for storing data
* variables means which can vary
* At the Start Var variable is always undefined
* typeof --> var a --> undefined

### Dynamically Typed vs. Statically Typed Languages
*1. Dynamically Typed
* Definition: In dynamically typed languages, the type of a variable is determined at runtime, not in advance.

### You don't have to declare the type of a variable when you write the code.

// Type checks happen while the program is running.
// Languages: Python, JavaScript, Ruby, PHP

// 2. Statically Typed
// Definition: In statically typed languages, the type of a variable is determined at compile-time.

// You must declare the variable type before using it.

// Type checks happen before the program runs.
// Languages: Java, C, C++, TypeScript, Go

// var a = 10;
// console.log(a);

// let input = "a,b,c,d";
// let keys = input.split(",");
// const result = keys.reducerright((acc, keys) => {
//   return { [keys]: acc };
// }, undefined);

// console.dir(result, { depth: null });

let input = "a,b,c,d";
let keys = input.split(",");
// const result = keys.reducerright((acc, keys)) => ({ [keys]: acc });

console.log(keys);
