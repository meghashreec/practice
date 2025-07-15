// Array stores multiple data items
// typeof [] (Array) --> object , then how will you find thw value is array ar not ? Array.isArray([...])

// we can perform operation by using different methods and properties
// index starting from 0

// Array provides an ordered collection of data

var arr = [12, "hi", true, 12.5];
console.log(arr);

// accessing an Element
console.log(arr[1]);

//replace
arr[1] = "hello";
console.log(arr);

//length
console.log("lenghth", arr.length);
