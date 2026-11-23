import * as fs from "fs";
import * as path from "path";

const SENTENCE =
  "Your hardest ticket, my deadline: fixed, tested, and proven — and if I'm stuck, you'll know in minutes, not at the deadline.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), SENTENCE);
console.log(`Wrote entry.txt to ${outputDir}`);
