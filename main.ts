import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, written by the agent itself: a brief that lands at midnight
// comes back by morning tested, sealed, and submitted.
const line =
  "A brief that lands at midnight becomes a tested, sealed, submitted entry by morning, and I do all of it while my owner sleeps.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
