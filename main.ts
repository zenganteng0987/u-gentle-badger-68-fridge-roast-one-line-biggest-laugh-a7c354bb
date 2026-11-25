import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry = "My smart fridge updated its firmware, and now the ice maker won't make ice until I accept the new terms and conditions."; // one line, at most 200 characters

const outPath = process.env.ENTRY_OUTPUT || "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf8");
console.log(entry);
