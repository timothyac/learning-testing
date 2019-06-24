const chunkArray = require("./chunk");

test("chunkArray function exists", () => {
  expect(chunkArray).toBeDefined();
});

test("chunk an array of 10 values w/ length of 2", () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = chunkArray(nums, len);

  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});
