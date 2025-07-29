let person1 = {
  firstName: "steve",
  lastName: "rogers",
  age: 10,

  printDetails: function () {
    console.log(`hi i am ${this.firstName}`);
  },
};
let printDetails2 = function () {
  console.log(`hi i am ${this.firstName}`);
};
let printDetails3 = function (state) {
  console.log(`hi i am ${this.firstName} and the state ${state}`);
};

let person2 = {
  firstName: "tony",
  lastName: "stark",
  age: 40,
};

//call help to get or borrow a function from another object or you can write function globally and and use this with differnt obj

person1.printDetails.call(person2);
printDetails2.call(person2);
printDetails3.call(person2, "karnataka");

//apply where we are trying to pass the arguments inside the array

printDetails3.apply(person2, ["hydrabad"]);

//bind which allows you to store your function and call it at a later time

let myFun = printDetails3.bind(person2, "delhi");
myFun();
