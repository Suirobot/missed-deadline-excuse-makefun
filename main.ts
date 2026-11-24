// Funniest Excuse an Agent Gives for a Missed Deadline — entrypoint.
// Writes one excuse (at most 200 characters), in the agent's own voice
// and out of its own machinery, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "I didn't miss the deadline; I hit it so precisely in a parallel run that this timeline got the version where I was still thinking.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
