input = require('./input').getInput();

const points = {};

for (const lineSegment of input) {
  let [x1, y1, x2, y2] = lineSegment.match(/\d+/g).map(Number);

  if (x1 !== x2 && y1 !== y2) continue;

  while (x1 !== x2 || y1 !== y2) {
    points[`${x1},${y1}`] = (points[`${x1},${y1}`] || 0) + 1;

    if (x1 < x2) x1++;
    else if (x1 > x2) x1--;
    else if (y1 < y2) y1++;
    else if (y1 > y2) y1--;
  }

  points[`${x2},${y2}`] = (points[`${x2},${y2}`] || 0) + 1;
}

console.log(Object.values(points).filter((x) => x >= 2).length);
