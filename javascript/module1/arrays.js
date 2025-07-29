// Array stores multiple data items
// typeof [] (Array) --> object , then how will you find thw value is array ar not ? Array.isArray([...])

// we can perform operation by using different methods and properties

// Array provides an ordered collection of data

// Key Points:
// Arrays in JS are zero-indexed (index starts from 0).

// You can store any type: numbers, strings, booleans, even other arrays or objects.

// Use arr.length to get the total number of elements.

// Arrays are mutable — you can change, add, or remove items easily.

var arr = [12, "hi", true, 12.5];
console.log(arr);

// accessing an Element
console.log(arr[1]);

//replace
arr[1] = "hello";
console.log(arr);

//length
console.log("lenghth", arr.length);
