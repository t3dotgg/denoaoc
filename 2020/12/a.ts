// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

let list: [string, number][] = input
  .split("\n")
  .map((s) => [s[0], parseInt(s.substr(1), 10)]);

let [x, y] = [0, 0];

list.forEach(([action, argument]) => {
  let ac = action;
  let arg = argument;
  if (ac == "F") {
    switch (dir % 360) {
      case 0:
        ac = "N";
        break;
      case 90:
        ac = "E";
        break;
      case 180:
        ac = "S";
    }
  }
  if (ac == "N") {
    wy += arg;
  }
  if (ac == "E") {
    wx += arg;
  }
  if (ac == "S") {
    wy -= arg;
  }
  if (ac == "W") {
    wx -= arg;
  }
  if (ac == "L") {
    while (arg !== 0) {
      console.log("stuck l", arg);
      [wx, wy] = [-wy, wx];
      arg -= 90;
    }
  }
  if (ac == "R") {
    while (arg !== 0) {
      console.log("stuck r", arg);
      [wx, wy] = [wy, -wx];
      arg -= 90;
    }
  }
});

console.log(x, y);
console.log(Math.abs(x) + Math.abs(y));
