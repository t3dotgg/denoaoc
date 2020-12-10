// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n").map((l) => parseInt(l, 10));

console.log(lines);

let index = 24;

let badValue = 0;

while (index < lines.length && !badValue) {
  index++;
  const tempList = [...lines];
  const preamble = tempList.slice(index - 25, index);
  const value = lines[index];
  let x,
    y = null;
  preamble.forEach((a, i) => {
    preamble.forEach((b, i2) => {
      if (i !== i2 && a + b === value) {
        x = a;
        y = b;
      }
    });
  });
  console.log("pre", preamble);
  if (x === null || y === null) {
    badValue = value;
  }
}

console.log("BAD", badValue);
