// when we want every thing to be mutable(unchangable)
//spread operator {...}
//takes out first properties inside an object and creates a seperate reference
let firstPerson = {
  name: "adam",
  age: 24,

  address: {
    city: "lucknow",
    state: "up",
  },
};
let secondPerson = { ...firstPerson };

secondPerson.name = "steve";
secondPerson.address.city = "delhi";
console.log(firstPerson);
console.log(secondPerson);
