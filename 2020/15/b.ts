// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

let list: number[] = input.split(",").map((v) => parseInt(v, 10));

console.log(list);

const saidMap = new Map<number, number>();
list.forEach((value, index) => {
  saidMap.set(value, index + 1);
});

let count = list.length;
let lastSaid: number = 0;

const limit = 30000000 - 1;

while (count < limit) {
  const lastIndex = saidMap.get(lastSaid);
  count++;
  saidMap.set(lastSaid, count);
  if (lastIndex === undefined) {
    lastSaid = 0;
  } else {
    const newNum = count - lastIndex;
    lastSaid = newNum;
  }
}

console.log(lastSaid);
