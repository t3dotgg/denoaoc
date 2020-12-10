// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

const lines = input
  .split("\n")
  .map((l) => parseInt(l, 10))
  .sort((a, b) => a - b);

const values: number[] = [0, ...lines, lines[lines.length - 1] + 3];

const counts = new Array(values.length).fill(0);
counts[0] = 1;

for (let i = 1; i < values.length; i++) {
  for (let j = 0; j < i; j++) {
    if (values[i] - values[j] <= 3) {
      counts[i] += counts[j];
    }
  }
}

console.log(counts[counts.length - 1]);
