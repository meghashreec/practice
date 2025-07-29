function createCar(_name, _company, _color) {
  this.name = _name;
  this.color = _color;
  this.company = _company;

  this.drive = function () {
    console.log(`I am driving ${this.name}`);
  };
}
let car1 = new createCar("x4", "BMW", "red");
let car2 = new createCar("s-class", "mercedes", "white");

// console.log(car1);
// console.log(car2);

car1.drive();
car2.drive();
