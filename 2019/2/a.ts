import { readOperations } from "../common/intcode.ts";

const results = await Deno.readTextFile("./input.txt");
const inputBuffer = results.split(",").map((n) => parseInt(n, 10));

inputBuffer[1] = 12;
inputBuffer[2] = 2;
console.log(readOperations(inputBuffer));
