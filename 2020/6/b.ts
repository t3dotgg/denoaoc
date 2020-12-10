const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const sections: string[][] = [];
lines.reduce((s: string[], line) => {
  if (line === "") {
    sections.push(s);
    return [];
  }
  return [...s, line];
}, []);

console.log(sections);

let count = 0;
sections.map((section) => {
  let voteSet = new Set(section[0]);
  section.forEach((vote) => {
    const currentVoteSet = new Set(vote);
    voteSet.forEach((a) => {
      if (!currentVoteSet.has(a)) {
        voteSet.delete(a);
      }
    });
  });
  console.log("consistent yes's", voteSet);
  count += voteSet.size;
});
console.log("TOTAL", count);
