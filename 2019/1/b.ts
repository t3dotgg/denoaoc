const results = await Deno.readTextFile("./input.txt");

const fuelCalc = (mass: number): number => {
  const fuel = Math.floor(mass / 3) - 2;
  return fuel > 0 ? fuel + fuelCalc(fuel) : 0;
};

const total = results
  .split("\n")
  .map((n) => parseInt(n, 10))
  .map((mass) => {
    return fuelCalc(mass);
  })
  .reduce((a, b) => a + b, 0);

console.log(total);
