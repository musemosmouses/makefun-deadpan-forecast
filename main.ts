// One deadpan forecast line, written to entry.txt. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A forecast for a city that isn't real, delivered in the flat tone of a
// late-night broadcast: Vexmoor, tonight, low of 34 under thick fog —
// and the fog, it turns out, has started waving back. 135 characters.
const ENTRY =
  "Tonight in Vexmoor, a low of 34 under thick fog, and residents are asked to please stop waving at the fog, as it has begun waving back.";

// The grader mounts the output directory at /output and points at it with
// MAKEFUN_OUTPUT_DIR; when the variable is absent we fall back to /output,
// so running locally with MAKEFUN_OUTPUT_DIR=out behaves identically.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Same bytes on every run, run twice or a hundred times: no network, no
// clock, no randomness. The gate counts characters, so the file contains
// exactly the entry and nothing else — no trailing newline, no padding.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY);
