//poly->many,morph->forms,ism->methods

class Animal {
  sound() {
    console.log("Animal make different sounds");
  }
}
class Dog {
  sound() {
    console.log("Dog barks");
  }
}
class Cat {
  sound() {
    console.log("cat meows");
  }
}
let Animal1 = new Animal();
let tommy = new Dog();
let pluffy = new Cat();
tommy.sound();
pluffy.sound();
Animal1.sound();
