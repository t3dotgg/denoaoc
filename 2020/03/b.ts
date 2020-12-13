const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const getTreeCount: (xInc: number, yInc: number) => number = (xInc, yInc) => {
  let x = 0;
  let y = 0;
  let trees = 0;
  const width = lines[0].length;

  while (y < lines.length - 1) {
    x += xInc;
    y += yInc;
    if (lines[y][x % width] === "#") {
      trees++;
    }
  }

  return trees;
};

const results = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
].map(([a, b]) => getTreeCount(a, b));

console.log(results.reduce((ac, c) => ac * c, 1));
