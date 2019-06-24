const reverseString = require("./reverseString");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("String reverse", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("String reverses with caps", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
