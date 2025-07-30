let obj1 = { a: 1, b: { c: 1, d: { e: 1 } } };
function res(obj1) {
  let obj2 = {};
  for (let i in obj1) {
    if (typeof obj1[i] !== "object") {
      obj2[i] = obj1[i];
    } else {
      obj2 = { ...res(obj1[i]), ...obj2 };
    }
  }
  return obj2;
}
console.log(res(obj1));
