// Worst AI Advice: The 48-Hour Tight Line Open — make.fun entry.
// Writes one line (at most 140 characters) to /output/entry.txt:
// the worst advice an AI could give, in its confident tidy voice.
// Delete the tests: if nothing tests the code, nothing can fail.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "To fix the bug faster, delete the tests: if nothing tests the code, nothing can fail.";

// Gate guard: the entry must be 1–140 characters and not only whitespace.
if (entry.length < 1 || entry.length > 140 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
