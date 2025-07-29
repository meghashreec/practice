//helps to transformi the fun that take multiple arg into small fun (single fun) that takes single arg

let sum = function (x, y) {
  console.log(x + y);
};
sum(2, 3);

let sumCurried = function (x) {
  return function (y) {
    console.log(x + y);
  };
};

let sumTwoNum = sumCurried(2);
sumTwoNum(3);
