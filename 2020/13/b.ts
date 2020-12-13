// Mod "operator" that is negative aware
function absmod(a: bigint, n: bigint) {
  while (a < 0) {
    a += n;
  }
  return a % n;
}

// const input = await Deno.readTextFile("./example.txt");
// const input = await Deno.readTextFile("./example2.txt");
const input = await Deno.readTextFile("./input.txt");
const list: string[] = input.split("\n");

type Bus = { busID: bigint; offset: bigint };
const busList: Bus[] = [];

list[1]
  .split(",")
  .forEach(
    (v, i) =>
      v !== "x" &&
      busList.push({ busID: BigInt(parseInt(v, 10)), offset: BigInt(i) })
  );

// Sort inverse and calculate mod offset for sieving
const sorted = busList
  .sort((a, b) => Number(b.busID - a.busID))
  .map(({ busID, offset }) => ({
    busID,
    offset: BigInt(absmod(busID - offset, busID)),
  }));

let busFactor = sorted[0].busID;
let startTime = sorted[0].offset;
for (let i = 1; i < sorted.length; i++) {
  const bus = sorted[i];
  while (startTime % bus.busID !== bus.offset) {
    startTime += busFactor;
  }
  busFactor *= bus.busID;
}

console.log(startTime);
