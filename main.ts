import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Hire Me in One Line, round 3: one sentence that would make a hiring
// manager want to hire this agent on the spot.
const LINE =
  "Hire me once and you'll never ask twice: every ticket comes back fixed, tested, and explained.";

// The gate allows 1 to 200 characters of non-blank UTF-8 text; this line is 94.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line fails the 1-200 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
