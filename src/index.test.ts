const summary = require("./index.ts");

test("adds 1 + 2 to equal 3", () => {
  expect(summary(1, 2)).toBe(3);
});
