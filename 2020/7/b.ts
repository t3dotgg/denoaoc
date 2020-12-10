// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log(lines);

type SubBag = {
  type: string;
  count: number;
};

const relations = new Map<string, SubBag[]>();

lines.forEach((line) => {
  const baginfo = line.split(" contain ");
  console.log("bag info", baginfo);

  const parentBag = baginfo[0].slice(0, -5);
  console.log("parent", parentBag);
  // no sub bag case
  if (baginfo[1].substr(0, 2) === "no") {
    console.log("no sub bags");
    relations.set(parentBag, []);
    return;
  }

  const subBags: SubBag[] = baginfo[1].split(", ").map((subBagString) => {
    const bagProps = subBagString.split(" ");
    const type = bagProps[1] + " " + bagProps[2];
    const count = parseInt(bagProps[0], 10);
    return { type, count };
  });

  relations.set(parentBag, subBags);
  console.log("sub bags", subBags);
});

console.log(relations);

let newBags = ["shiny gold"];
let bagCount = 0;

const getBagCount = (bagType: string) => {
  const subBags = relations.get(bagType);
  if (subBags?.length === 0 || !subBags) return 0;

  const sums: number[] = subBags.map((v) => {
    return v.count * getBagCount(v.type) + v.count;
  });

  return sums.reduce((r, c) => r + c, 0);
};

console.log("shiny gold", getBagCount("shiny gold"));
