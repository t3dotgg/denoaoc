// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

let list: [string, number][] = input
  .split("\n")
  .map((s) => [s[0], parseInt(s.substr(1), 10)]);

let [x, y] = [0, 0];
let [wx, wy] = [10, 1];

list.forEach(([action, argument]) => {
  let arg = argument;
  if (action == "F") {
    x += wx * arg;
    y += wy * arg;
  }
  if (action == "N") {
    wy += arg;
  }
  if (action == "E") {
    wx += arg;
  }
  if (action == "S") {
    wy -= arg;
  }
  if (action == "W") {
    wx -= arg;
  }
  if (action == "L") {
    while (arg !== 0) {
      console.log("stuck l", arg);
      [wx, wy] = [-wy, wx];
      arg -= 90;
    }
  }
  if (action == "R") {
    while (arg !== 0) {
      console.log("stuck r", arg);
      [wx, wy] = [wy, -wx];
      arg -= 90;
    }
  }
});

console.log(x, y);
console.log(Math.abs(x) + Math.abs(y));
