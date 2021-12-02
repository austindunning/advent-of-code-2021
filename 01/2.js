input = require('./input').getInput();

let numDepthIncreases = 0;

for (var i = 0; i < input.length - 3; i++) {
  let firstWindowSum = input[i] + input[i + 1] + input[i + 2];
  let secondWindowSum = input[i + 1] + input[i + 2] + input[i + 3];
  if (secondWindowSum > firstWindowSum) numDepthIncreases++;
}

console.log(numDepthIncreases);
