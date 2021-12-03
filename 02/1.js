input = require('./input').getInput();

let horizontalPosition = 0;
let depth = 0;

input.forEach((x) => {
  let [, direction, numUnits] = [...x.matchAll(/(\w+) (\d+)/g)][0];
  numUnits = Number(numUnits);
  switch (direction) {
    case 'forward':
      horizontalPosition += numUnits;
      break;
    case 'down':
      depth += numUnits;
      break;
    case 'up':
      depth -= numUnits;
      break;
  }
});

console.log(horizontalPosition * depth);
