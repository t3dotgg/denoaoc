const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

let seatMap: Map<number, number[]> = new Map();

lines.forEach((line) => {
  const r = line.substr(0, 7);
  const l = line.substr(-3);
  let min = 0;
  let max = 127;

  r.split("").forEach((c) => {
    if (c === "F") {
      max = Math.floor((max - min) / 2) + min;
    } else {
      min = Math.ceil((max - min) / 2) + min;
    }
    console.log("min, max", min, max);
  });

  console.log("min, max", min, max);

  let cMin = 0;
  let cMax = 7;

  l.split("").forEach((c) => {
    if (c === "L") {
      cMax = Math.floor((cMax - cMin) / 2) + cMin;
    } else {
      cMin = Math.ceil((cMax - cMin) / 2) + cMin;
    }
    console.log("min, max", cMin, cMax);
  });

  const row = min;
  const column = cMin;

  const taken = seatMap.get(row);

  const seats = taken ? [...taken, column] : [column];
  seatMap.set(row, seats);
});

seatMap.forEach((seats, key) => {
  if (seats.length < 8) {
    console.log("SEAT EMPTY", key, seats);
  }
  // use output to determine which seat is yours
});
