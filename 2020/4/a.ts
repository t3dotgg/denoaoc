const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const sections: string[] = [];
lines.reduce((s: string, line) => {
  if (line === "") {
    sections.push(s);
    return "";
  }
  return s ? s + " " + line : line;
}, "");

const REQUIRED = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const good = sections.filter((section) => {
  const prefixes = section.split(" ").map((kv) => {
    const [k] = kv.split(":");
    return k;
  });
  console.log(prefixes);
  const missed = REQUIRED.filter((rec) => !prefixes.includes(rec));
  return missed.length === 0;
});

console.log("total", sections.length);
console.log("answer", good.length);
