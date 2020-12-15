// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

let list: number[] = input.split(",").map((v) => parseInt(v, 10));

console.log(list);

while (list.length < 2020) {
  const l = list.slice();
  const lastVal = l.pop();
  const reverseL = l.reverse();
  const lastInstance = l.findIndex((v) => v === lastVal);
  if (lastInstance === -1) {
    list.push(0);
  } else {
    list.push(lastInstance + 1);
  }
}

console.log(list.reverse()[0]);
