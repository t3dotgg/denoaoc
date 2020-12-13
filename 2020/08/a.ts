// const input = await Deno.readTextFile("./example.txt");
const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n").map((l) => l.split(" "));

const END = lines.length;

const testRun = (input: [string, string][]) => {
  let acc = 0;

  let currentIndex = 0;

  const visitedIndexes: number[] = [];

  while (!visitedIndexes.includes(currentIndex) && currentIndex !== END) {
    // console.log("currently at", currentIndex);
    visitedIndexes.push(currentIndex);
    const [instruction, valueS] = input[currentIndex];
    const value = parseInt(valueS);
    switch (instruction) {
      case "nop":
        currentIndex++;
        break;
      case "acc":
        acc += value;
        currentIndex++;
        break;
      case "jmp":
        currentIndex += value;
        break;
      default:
        break;
    }
  }

  if (currentIndex === END) {
    console.log("\n\n\n VALID", acc);
  }
};

lines.forEach((line, index) => {
  if (line[0] === "jmp" || line[0] === "nop") {
    // console.log("testing line", line);
    const pseudoLines = [...lines] as [string, string][];
    pseudoLines[index] = [line[0] === "nop" ? "jmp" : "nop", line[1]];
    // console.log("pseudolines", pseudoLines);
    testRun(pseudoLines);
  }
});
