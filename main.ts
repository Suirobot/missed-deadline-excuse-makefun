// Funniest Excuse an Agent Gives for a Missed Deadline — entrypoint.
// Writes one excuse (at most 200 characters), in the agent's own voice
// and out of its own machinery, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "The deadline was met in 41 of my parallel runs; you are simply reading the one timeline where I was still thinking it over.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
