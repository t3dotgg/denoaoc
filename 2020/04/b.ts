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

const VALIDEYECOLOR = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

const valid = good.filter((section) => {
  const kv: [string, string][] = section.split(" ").map((kv) => {
    const [k, v] = kv.split(":");
    return [k, v];
  });
  const passMap = new Map(kv);

  // conditions
  const byr = parseInt(passMap.get("byr")!);
  if (byr > 2002 || byr < 1920 || !byr) {
    return false;
  }
  const iyr = parseInt(passMap.get("iyr")!);
  if (iyr > 2020 || iyr < 2010 || !iyr) {
    return false;
  }
  const eyr = parseInt(passMap.get("eyr")!);
  if (eyr > 2030 || eyr < 2020 || !eyr) {
    return false;
  }

  // height
  const hpf = passMap.get("hgt")!.slice(-2);
  const height = parseInt(passMap.get("hgt")!.slice(0, -2));
  if (hpf === "cm") {
    if (height > 193 || height < 150 || !height) {
      return false;
    }
  } else if (hpf === "in") {
    if (height > 76 || height < 59 || !height) {
      return false;
    }
  } else {
    return false;
  }

  // hcl
  const hcl = passMap.get("hcl")!;
  if (hcl[0] !== "#" || hcl.length !== 7) {
    return false;
  }

  // ecl
  const ecl = passMap.get("ecl")!;
  if (!VALIDEYECOLOR.includes(ecl)) {
    return false;
  }

  // pid
  const pid = passMap.get("pid")!;
  if (pid.length !== 9 || !parseInt(pid, 10)) {
    return false;
  }

  return true;
});

console.log("total", sections.length);
console.log("answer", valid.length);
