import { readOperations } from "../common/intcode.ts";

const results = await Deno.readTextFile("./input.txt");
const inputBuffer = results.split(",").map((n) => parseInt(n, 10));

let noun = 0;
let verb = 0;
let result = readOperations(inputBuffer);
while (result !== 19690720) {
  if (verb < 100) {
    verb++;
  } else {
    noun++;
    verb = 0;
  }
  inputBuffer[1] = noun;
  inputBuffer[2] = verb;
  result = readOperations(inputBuffer);
}

console.log(100 * noun + verb);
