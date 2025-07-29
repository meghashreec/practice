//  object is an unordered collection of key value pair , each key-value pair is called property.
//fun inside a object is called method
//method is also called as entity , key value pair is called as property
//  JS provides you with many ways to create an object.the most commonly used one is to use the object literal Notation
// 1. Object Literal Creation
var person = {
  firstName: "adam",
  secondName: "smith",
  age: 30,
  ownsCar: false,
};
console.log(person);
// 2. Accessing Properties
//  Dot notation: person.age

console.log(person.age);

//  Bracket notation: person["firstName"]

console.log(person["firstName"]);

// 3. Nested Objects and Arrays

var cap = {
  firstName: "steve",
  lastname: "roggers",
  age: 22,
  friends: ["barnes", "bruce", "tony"],
  isAvenger: true,
  address: {
    state: "New york",
    city: {
      name: "brooklyn",
      pincode: 12345,
    },
  },
};

// Access nested array: cap.friends[1] → "bruce"

// Access deeply nested object: cap.address.city.name → "brooklyn"

console.log(cap.friends[1]);
console.log(cap.address.city.name);

// 4. Modifying Object Properties
cap.isAvenger = false;
console.log(cap.isAvenger);
cap.movies = ["age of ultron", "civil war"];
console.log(cap);
// 5. Deleting a Property
delete cap.age;
console.log(cap);
// 6. Check if a property exists
console.log("age" in cap); // false (after delete)
console.log(cap.hasOwnProperty("movies")); // true
// 7.Loop over keys
for (let key in cap) {
  console.log(key, "=>", cap[key]);
}
// 8.Get all keys/values
console.log("keys", Object.keys(cap)); // ['firstName', 'lastname', ...]
console.log("values", Object.values(cap)); // ['steve', 'roggers', ...]
