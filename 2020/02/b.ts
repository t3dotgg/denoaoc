const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

// console.log(lines);

let passCount = 0;

function countCharacters(char: string, input: string) {
  return input.split("").reduce((acc, ch) => (ch === char ? acc + 1 : acc), 0);
}

lines.forEach((line) => {
  const [min, p1] = line.split("-");
  const [max, p2, password] = p1.split(" ");
  const [char] = p2.split(":");
  const firstValid = password[parseInt(min) - 1] === char;
  const secondValid = password[parseInt(max) - 1] === char;
  if (firstValid && !secondValid) {
    passCount++;
  }
  if (secondValid && !firstValid) {
    passCount++;
  }
});

console.log("total count", passCount);
