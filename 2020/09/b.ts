// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n").map((l) => parseInt(l, 10));

console.log(lines);

const badValue = 27911108;
// const badValue = 127;

let ri = 0;
let ra = 1;
let answer = null;

while (ri < lines.length && !answer) {
  const values = [...lines].slice(ri, ri + ra).sort();
  const sum = values.reduce((a, c) => a + c, 0);
  if (sum > badValue) {
    console.log("NEXT");
    ra = 1;
    ri += 1;
  } else if (sum === badValue) {
    console.log("FOUND AT RANGE", ri, ri + ra);
    answer = values[0] + values[values.length - 1];
    console.log("ANSWER", answer);
  } else {
    ra++;
  }
}

console.log(answer);
