import { readFileSync } from "fs";
import { resolve, dirname } from "path";

// Get the expenses from the input file, transform to
// an array and convert entries from strings to number
const expenses = readFileSync(
  // @ts-ignore
  resolve(dirname(require.main.filename), "input.txt"),
  "utf8"
)
  .trim()
  .split("\n")
  .map((expense) => +expense);

export const fixExpenseReport = (expenses: number[]) => {
  // Create placeholder for result to be returned
  let result = 0;

  // Find the mathich expenses with some and indexOf
  expenses.some((expense) => {
    const index = expenses.indexOf(2020 - expense);
    if (index > -1) {
      // Found it! Update result!
      result = expense * expenses[index];
    }
  });

  return result;
};

console.log(fixExpenseReport(expenses));
