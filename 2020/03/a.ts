const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log(lines);

let x = 0;
let trees = 0;
const width = lines[0].length;

lines.forEach((line, index) => {
  if (index === 0) {
    return;
  }
  x = x + 3;
  console.log("line", line);
  console.log("tree?", line[x % width]);
  if (line[x % width] === "#") {
    trees++;
  }
});

console.log("trees", trees);

// x x x x x
