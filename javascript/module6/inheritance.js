// methods and properties can be passed into derived class

class Person {
  constructor(_age, _name) {
    this.name = _name;
    this.age = _age;
  }
}

class Teacher extends Person {
  constructor(_name, _age, _classStrength) {
    super(_name, _age);
    this.classStrength = _classStrength;
  }
}

class Student extends Person {
  constructor(_name, _age, _cgpa) {
    super(_name, _age);
    this.cgpa = _cgpa;
  }
}
let Person1 = new Person("adam", 23);
let Teacher1 = new Teacher("mark", 35, 76);
console.log(Teacher1);
