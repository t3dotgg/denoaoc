// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

console.log(lines);

const relations = new Map<string, string[]>();

lines.forEach((line) => {
  const baginfo = line.split(" contain ");
  console.log("bag info", baginfo);

  // no sub bag case
  if (baginfo[1].substr(0, 2) === "no") {
    console.log("no sub bags");
    return;
  }
  const parentBag = baginfo[0].slice(0, -5);
  console.log("parent", parentBag);

  const subBags = baginfo[1].split(", ").map((subBagString) => {
    const bagProps = subBagString.split(" ");
    return bagProps[1] + " " + bagProps[2];
  });

  relations.set(parentBag, subBags);
  console.log("sub bags", subBags);
});

console.log(relations);

let validBags = ["shiny gold"];
let lastLength = 0;

while (validBags.length !== lastLength) {
  lastLength = validBags.length;
  relations.forEach((val, key) => {
    if (validBags.includes(key)) {
      console.log("already in");
      return;
    }
    console.log("not in:", key);
    val.forEach((bag) => {
      console.log("checking bag", bag, "against key", key);
      if (validBags.includes(bag) && !validBags.includes(key)) {
        console.log("adding key", key);
        validBags.push(key);
      }
    });
  });
  console.log(validBags.length, validBags);
}

console.log(validBags.length - 1);
