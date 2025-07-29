function hello() {
  console.log("hello");
}
let timer = setInterval(hello, 1000); // this will run infinite time so we use setTimeout

setTimeout(function () {
  clearInterval(timer);
}, 3000);
