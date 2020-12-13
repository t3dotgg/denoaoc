// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

const list: string[] = input.split("\n");

const timestamp = parseInt(list[0], 10);
const busTimes = list[1]
  .split(",")
  .filter((v) => v !== "x")
  .map((v) => parseInt(v, 10));

console.log(timestamp, busTimes);

let remainder = 100000000000;
let busID = 0;

busTimes.forEach((id) => {
  const next = (Math.floor(timestamp / id) + 1) * id;
  const wait = next - timestamp;
  if (wait < remainder) {
    remainder = wait;
    busID = id;
  }
});

console.log(remainder, busID, remainder * busID);
