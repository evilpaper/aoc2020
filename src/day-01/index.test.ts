import { fixExpenseReport } from "./index";

const inputData = [1721, 979, 366, 299, 675, 1456];

it("should return 514579 with provided sample data", () => {
  expect(fixExpenseReport(inputData)).toEqual(514579);
});
