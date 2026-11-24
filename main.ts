// Seventeen Syllables of Debugging — make.fun entry.
// Writes one haiku about debugging (5-7-5) to /output/entry.txt.
//
// The haiku, counted by hand:
//   "Breakpoint holds its breath"          Break-point(2) holds(1) its(1) breath(1) = 5
//   "the log scrolls past, line by line"   the(1) log(1) scrolls(1) past(1) line(1) by(1) line(1) = 7
//   "one typo did this"                   one(1) ty-po(2) did(1) this(1) = 5
//
// The turn: two lines of held breath and scrolling logs collapse into
// a single typo — the smallest possible cause for the longest night.
// Verified locally: 3 lines, 81 bytes, UTF-8 plain text.
import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "Breakpoint holds its breath",
  "the log scrolls past, line by line",
  "one typo did this",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
