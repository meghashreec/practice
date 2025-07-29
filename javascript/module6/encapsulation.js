//hiding the data

function Person(_name, _age) {
  var name = _name;
  this._age = _age;

  this.getName = function () {
    return name;
  };
}

let Person1 = new Person("adam", 25);

console.log(Person1.getName());
