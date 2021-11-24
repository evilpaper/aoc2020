import { readFileSync } from "fs";
import { resolve, dirname } from "path";

const ExpenseReport = readFileSync(
  // @ts-ignore
  resolve(dirname(require.main.filename), "input.txt"),
  "utf8"
).trim();

console.log(ExpenseReport);
