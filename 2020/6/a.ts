const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const sections: string[] = [];
lines.reduce((s: string, line) => {
  if (line === "") {
    sections.push(s);
    return "";
  }
  return s + line;
}, "");

console.log(sections);

let count = 0;
sections.map((str) => {
  const unique = str
    .split("")
    .filter(function (item, i, ar) {
      return ar.indexOf(item) === i;
    })
    .join("");
  count += unique.length;
  console.log("non-unique", str);
  console.log("unique", unique);
});

console.log("TOTAL", count);
