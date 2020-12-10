const results = await Deno.readTextFile("./input.txt");

const wires = results.split("\n").map((s) => s.split(","));

const pointToString: (input: { x: number; y: number }) => string = ({
  x,
  y,
}) => {
  return `${x},${y}`;
};

const stringToPoint = (point: string | undefined): { x: number; y: number } => {
  if (!point) {
    return { x: 0, y: 0 };
  }
  const xy = point.split(",");
  return { x: parseInt(xy[0]), y: parseInt(xy[1]) };
};

const points = wires[0].reduce((points: string[], move) => {
  console.log(points);
  let { x, y } = stringToPoint(points[points.length - 1]);
  const amount = parseInt(move.substring(1));
  for (let i = 0; i < amount; i++) {
    switch (move[0]) {
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      case "R":
        x++;
        break;
      case "L":
        x--;
        break;
    }
    console.log("new x y", pointToString({ x, y }));
    points.push(pointToString({ x, y }));
  }

  return points;
}, []);
