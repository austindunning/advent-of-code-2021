input = require('./input').getInput();

const areAllNumbersMarked = (numbers) => numbers.every((x) => x === 'X');

const hasBingo = (board) => {
  for (let i = 0; i < board.length - 5; i += 5) {
    const rowNumbers = board.slice(i, i + 5);
    if (areAllNumbersMarked(rowNumbers)) return true;
  }

  for (let i = 0; i < 5; i++) {
    const columnNumbers = [...Array(5).keys()].map((x) => board[x * 5 + i]);
    if (areAllNumbersMarked(columnNumbers)) return true;
  }

  return false;
};

const getFirstWinningBoardAndNumberCalled = (boards, numbersCalled) => {
  for (let i = 0; i < numbersCalled.length; i++) {
    for (let j = 0; j < boards.length; j++) {
      const indexOfNumberCalled = boards[j].indexOf(numbersCalled[i]);
      if (indexOfNumberCalled !== -1) boards[j][indexOfNumberCalled] = 'X';

      if (hasBingo(boards[j]))
        return {
          firstWinningBoard: boards[j],
          numberCalled: numbersCalled[i],
        };
    }
  }
};

const boards = input.slice(1).map((x) => x.match(/\d+/g));
const numbersCalled = input[0].split(',');

const { firstWinningBoard, numberCalled } = getFirstWinningBoardAndNumberCalled(
  boards,
  numbersCalled
);

const unmarkedNumbersSum = firstWinningBoard
  .filter((x) => x !== 'X')
  .map(Number)
  .reduce((a, b) => a + b);

console.log(unmarkedNumbersSum * numberCalled);
