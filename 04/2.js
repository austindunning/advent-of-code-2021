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

const getLastWinningBoardAndNumberCalled = (boards, numbersCalled) => {
  let boardsRemaining = [...boards];
  let lastWinningBoardAndNumberCalled = {};
  for (let i = 0; i < numbersCalled.length; i++) {
    for (let j = 0; j < boardsRemaining.length; j++) {
      const indexOfNumberCalled = boardsRemaining[j].indexOf(numbersCalled[i]);
      if (indexOfNumberCalled !== -1)
        boardsRemaining[j][indexOfNumberCalled] = 'X';

      if (hasBingo(boardsRemaining[j])) {
        lastWinningBoardAndNumberCalled = {
          lastWinningBoard: boardsRemaining[j],
          numberCalled: numbersCalled[i],
        };

        boardsRemaining[j] = null;
      }
    }
    boardsRemaining = boardsRemaining.filter((x) => x);
  }

  return lastWinningBoardAndNumberCalled;
};

const boards = input.slice(1).map((x) => x.match(/\d+/g));
const numbersCalled = input[0].split(',');

const { lastWinningBoard, numberCalled } = getLastWinningBoardAndNumberCalled(
  boards,
  numbersCalled
);

const unmarkedNumbersSum = lastWinningBoard
  .filter((x) => x !== 'X')
  .map(Number)
  .reduce((a, b) => a + b);

console.log(unmarkedNumbersSum * numberCalled);
