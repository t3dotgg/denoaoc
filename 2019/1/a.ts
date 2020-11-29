const results = await Deno.readTextFile("./input.txt");

const total = results
  .split("\n")
  .map((n) => parseInt(n, 10))
  .map((mass) => {
    return Math.floor(mass / 3) - 2;
  })
  .reduce((a, b) => a + b, 0);

console.log(total);
