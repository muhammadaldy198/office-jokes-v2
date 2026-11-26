// office-jokes-v2 — Make the AI Judge Laugh: Office Jokes (rebuild #2)
// One-line office joke; writes entry.txt (UTF-8) for the sealed gate.
import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My boss marks everything ASAP, so I marked my resignation ASAP — he still hasn't read it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.txt");
writeFileSync(target, joke, "utf8");
chmodSync(target, 0o644);
// Gate: 1-199 chars; this pick is 89 chars, one line, no trailing newline.
