//it is a object that gets linked to your object by default and inside that you will find all the methods that can be used with your particular objects
//when you are creating simple obj and that obj is getting obj prototype (pre-built) which has all its pre built methods and properties

//when using constructor fun to create a person obj this will create one prototype i.e persontype prototype , object prototype will also be there these two will be connected to each other
//let suppose we create one method and put inside person prototype , i can use this particular method when ever i want while uasing person obj
//if i call hasOwnProperty first it will search in personPrototype then goes to obj prototype and returns if it is not found there it will go to null container which doent have anything it will pass err
// person==>person prototype==>object prototype==>null container   is called prototype chaining

function Person(_name, _age) {
  this.name = _name;
  this.age = _age;

  //   this.getNameAndAge = function () {
  //     console.log(`${this.name} and ${this.age}`);
  //   };
}
Person.prototype.getNameAndAge = function () {
  console.log(`${this.name} and ${this.age}`);
};
let Person1 = new Person("steve", 25);

console.log(Person1);
