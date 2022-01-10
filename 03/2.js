input = require('./input').getInput();

const getRating = (useMostCommonValue) => {
  let numbers = [...input];
  const numberlength = numbers[0].length;

  for (let i = 0; i < numberlength; i++) {
    const numZerosAtIPosition = numbers
      .map((x) => x[i])
      .filter((x) => x === '0').length;

    const halfNumbersLength = numbers.length / 2;
    let valueToKeep = useMostCommonValue ? '1' : '0';

    if (numZerosAtIPosition > halfNumbersLength)
      valueToKeep = useMostCommonValue ? '0' : '1';

    numbers = numbers.filter((x) => x[i] === valueToKeep);
    if (numbers.length === 1) return parseInt(numbers[0], 2);
  }
};

const oxygenGeneratorRating = getRating(true);
const co2ScrubberRating = getRating(false);

console.log(oxygenGeneratorRating * co2ScrubberRating);
