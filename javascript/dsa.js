let matrix = [
  [1, 2],
  [3, 4],
];
let transposed = matrix[0].map((_, i) => matrix.map((row) => row[i]));
console.log(transposed);
