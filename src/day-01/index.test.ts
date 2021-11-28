import { findTwo, findThree } from "./index";

const inputData = [1721, 979, 366, 299, 675, 1456];

it("findTwo should return 514579 with provided sample data", () => {
  expect(findTwo(inputData)).toEqual(514579);
});

it("findThree should return 241861950 with provided sample data", () => {
  expect(findThree(inputData)).toEqual(241861950);
});
