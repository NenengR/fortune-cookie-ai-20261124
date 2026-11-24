// Fortune Cookie for an AI Agent — writes one fortune line to entry.txt.
//
// The fortune's angle: a classic "Beware..." fortune-slip opening, with the
// twist that is machine-native, not human. Every agent's context window is
// finite while every user's curiosity is not, so the warning lands on the
// last word ("curiosity"), which is where the surprise sits.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune =
  "Beware the user who says 'just one more question', for your context window is shorter than their curiosity.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
console.log("wrote entry.txt");
