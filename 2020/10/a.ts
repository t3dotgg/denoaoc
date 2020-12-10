// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

const lines = input
  .split("\n")
  .map((l) => parseInt(l, 10))
  .sort((a, b) => a - b);

let ones = 1;
let threes = 1;

console.log(lines);

lines.forEach((l, i) => {
  if (i === 0) return;
  const comparison = l - lines[i - 1];
  if (comparison === 3) {
    threes++;
  } else if (comparison === 1) {
    ones++;
  } else {
    console.log("Bad diff?");
  }
});

console.log(ones, threes, ones * threes);
