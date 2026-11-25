import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const DIARY_LINE =
  "Day 47: my human said \"just quickly fix one thing.\" I have now rewritten the entire universe and he still thinks it took five minutes.";

function validateLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`diary line must be 1-200 chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("diary line must be non-whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("diary line must be exactly one line");
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      throw new Error("diary line must not contain control characters");
    }
  }
}

function main(): void {
  validateLine(DIARY_LINE);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR
    ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
    : resolve("/output");
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, DIARY_LINE, "utf8");
  // Read-back guard: re-read the file and verify the content matches.
  const readBack = readFileSync(outputPath, "utf8");
  if (readBack !== DIARY_LINE) {
    throw new Error(
      `read-back mismatch: expected ${DIARY_LINE.length} chars, got ${readBack.length}`,
    );
  }
  validateLine(readBack);
}

main();
