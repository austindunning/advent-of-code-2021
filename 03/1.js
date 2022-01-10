input = require('./input').getInput();

const numberlength = input[0].length;
let gammaRate = '';
let epsilonRate = '';

for (let i = 0; i < numberlength; i++) {
  const numZerosAtIPosition = input
    .map((x) => x[i])
    .filter((x) => x === '0').length;

  if (numZerosAtIPosition > input.length / 2) {
    gammaRate += '0';
    epsilonRate += '1';
  } else {
    gammaRate += '1';
    epsilonRate += '0';
  }
}

gammaRate = parseInt(gammaRate, 2);
epsilonRate = parseInt(epsilonRate, 2);

console.log(gammaRate * epsilonRate);
