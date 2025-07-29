function test() {
  let a = 2;

  function test1() {
    console.log(a);
  }
  return test1;
}
let fun = test();
fun();
//

function greet() {
  let name = "steve";

  function displayName() {
    console.log(`name ${name}`);

    let age = 25;

    function displayAge() {
      console.log(`age ${age}`);
      console.log(`age ${age},name ${name}`);
    }
    return displayAge;
  }
  return displayName;
}

let g1 = greet();
let g2 = g1();
g2();
