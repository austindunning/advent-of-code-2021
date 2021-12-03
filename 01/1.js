input = require('./input').getInput();

let numDepthIncreases = 0;

for (let i = 1; i < input.length; i++) {
  if (input[i] > input[i - 1]) numDepthIncreases++;
}

console.log(numDepthIncreases);
