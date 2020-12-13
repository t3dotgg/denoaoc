// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

let chairGrid = input.split("\n").map((l) => l.split(""));

const checkChair = (x: number, y: number) => {
  let ajacencies = 0;
  for (let xi = x - 1; xi <= x + 1 && xi < chairGrid[0].length; xi++) {
    for (let yi = y - 1; yi <= y + 1 && yi < chairGrid.length; yi++) {
      if (xi < 0 || yi < 0 || (xi === x && yi === y)) {
      } else {
        if (chairGrid[yi][xi] === "#") {
          ajacencies++;
        }
      }
    }
  }
  const chair = chairGrid[y][x];
  if (ajacencies > 3 && chair === "#") {
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
