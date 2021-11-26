import { readFileSync } from "fs";
import { resolve, dirname } from "path";

const expenses = readFileSync(
  // @ts-ignore
  resolve(dirname(require.main.filename), "input.txt"),
  "utf8"
)
  .trim()
  .split("\n")
  .map((expense) => +expense);

let result = 0;

expenses.some((expense) => {
  const index = expenses.indexOf(2020 - expense);
  if (index > -1) {
    // Found it
    result = expense * expenses[index];
  }
});

console.log(result);
