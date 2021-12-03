input = require('./input').getInput();

let horizontalPosition = 0;
let depth = 0;
let aim = 0;

input.forEach((x) => {
  let [, direction, numUnits] = [...x.matchAll(/(\w+) (\d+)/g)][0];
  numUnits = Number(numUnits);
  switch (direction) {
    case 'forward':
      horizontalPosition += numUnits;
      depth += aim * numUnits;
      break;
    case 'down':
      aim += numUnits;
      break;
    case 'up':
      aim -= numUnits;
      break;
  }
});

console.log(horizontalPosition * depth);
