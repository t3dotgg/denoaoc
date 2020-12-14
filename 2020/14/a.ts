// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

const list: string[][] = input.split("\n").map((s) => s.split(" = "));

console.log(list);

type MaskItem = {
  value: 0 | 1;
  index: number;
};

let currentMask: MaskItem[] = [];

const memory = new Map<number, number>();

list.forEach((value) => {
  if (value[0] === "mask") {
    currentMask = [];
    value[1].split("").forEach((char, index) => {
      if (char !== "X") {
        currentMask.push({
          value: char === "0" ? 0 : 1,
          index: index,
        });
      }
    });
    currentMask = currentMask.sort((a, b) => b.index - a.index);
    console.log("new mask", currentMask);
  } else {
    // "mem" value
    const memLocation = parseInt(
      value[0].replace("mem[", "").replace("]", ""),
      10
    );
    let binaryVal = parseInt(value[1]).toString(2);
    while (binaryVal.length < 36) {
      binaryVal = "0" + binaryVal;
    }
    let binaryArr = binaryVal.split("");
    currentMask.forEach(
      ({ value, index }) => (binaryArr[index] = value.toString())
    );
    console.log(memLocation);
    console.log("before", binaryVal);
    console.log("after ", binaryArr.join(""));
    const decVal = parseInt(binaryArr.join(""), 2);
    memory.set(memLocation, decVal);
    console.log("decimal", decVal);
  }
});

let result = 0;

memory.forEach((val) => {
  result += val;
});

console.log("Result", result);
