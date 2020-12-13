const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

let answer = 0;

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

  const id = min * 8 + cMin;
  if (id > answer) {
    answer = id;
  }
});

console.log(answer);
