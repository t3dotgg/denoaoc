// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

let chairGrid = input.split("\n").map((l) => l.split(""));

const dirs = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const checkChair = (x: number, y: number) => {
  let ajacencies = 0;
  dirs.forEach(([xv, yv]) => {
    let xi = x + xv;
    let yi = y + yv;
    while (
      xi < chairGrid[0].length &&
      xi >= 0 &&
      yi < chairGrid.length &&
      yi >= 0
    ) {
      if (chairGrid[yi][xi] === "#") {
        ajacencies++;
        return;
      } else if (chairGrid[yi][xi] === "L") {
        return;
      } else {
        xi = xi + xv;
        yi = yi + yv;
      }
    }
  });
  const chair = chairGrid[y][x];
  if (ajacencies >= 5 && chair === "#") {
    return "L";
  } else if (ajacencies === 0 && chair === "L") {
    return "#";
  }
  return chair;
};

const runChairs = () => {
  chairGrid = chairGrid.map((chairRow, y) => {
    return chairRow.map((_, x) => {
      return checkChair(x, y);
    });
  });
};

let occupy = 0;
let lastOccupy: number | null = null;

let count = 0;

while (occupy !== lastOccupy) {
  console.log("\n\n\n count", count);
  count++;
  lastOccupy = occupy;
  runChairs();
  occupy = chairGrid.flat().filter((v) => v === "#").length;

  chairGrid.forEach((row) => {
    console.log(row.join(""));
  });
  console.log(lastOccupy, occupy);
}
