// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

const list: string[][] = input.split("\n").map((s) => s.split(" = "));

console.log(list);

type MaskItem = {
  value: 0 | 1;
  index: number;
};

let currentMask: string = "";

const memory = new Map<number, number>();

// Recursively collect all locations given a "binary value" with Xs
const getValuesFromXs: (i: string, current?: string[]) => string[] = (
  input,
  current = []
) => {
  const inArr = input.split("");
  const firstX = inArr.findIndex((x) => x === "X");
  if (firstX === -1) {
    return [...current, input];
  }

  const f = [...inArr];
  f[firstX] = "0";

  const s = [...inArr];
  s[firstX] = "1";

  return [
    ...current,
    ...getValuesFromXs(f.join("")),
    ...getValuesFromXs(s.join("")),
  ];
};

list.forEach((value) => {
  if (value[0] === "mask") {
    currentMask = value[1];
  } else {
    const memLocation = parseInt(
      value[0].replace("mem[", "").replace("]", ""),
      10
    );
    const storeVal = parseInt(value[1]);
    let binaryMemLocation = memLocation.toString(2);
    while (binaryMemLocation.length < 36) {
      binaryMemLocation = "0" + binaryMemLocation;
    }

    let bmArr = binaryMemLocation.split("");

    currentMask.split("").forEach((char, index) => {
      if (char === "X" || char === "1") {
        bmArr[index] = char;
      }
    });

    const memLocations = getValuesFromXs(bmArr.join("")).map((v) =>
      parseInt(v, 2)
    );

    memLocations.forEach((location) => {
      memory.set(location, storeVal);
    });
  }
});

let result = 0;

memory.forEach((val) => {
  result += val;
});

console.log("Result", result);
