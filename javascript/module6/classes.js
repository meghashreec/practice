class person {
  constructor(_name, _age) {
    (this.name = _name), (this.age = _age);
  }
  welcome() {
    console.log(`welcome ${this.name}`);
  }
}

let person1 = new person("adam", 25);
person1.welcome();
console.log(person1);
