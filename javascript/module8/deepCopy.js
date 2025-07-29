//json.parse,json.stringfy which creates seperate reference for our object

let firstPerson = {
  name: "adam",
  age: 24,

  address: {
    city: "lucknow",
    state: "up",
  },
};
let secondPerson = JSON.parse(JSON.stringify(firstPerson));

secondPerson.name = "steve";
secondPerson.address.city = "delhi";
console.log(firstPerson);
console.log(secondPerson);
