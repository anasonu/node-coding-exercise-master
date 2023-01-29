const cleanDuplicates = require("./cleanDuplicates");

const mockArray = [
  { objects: [{ key: "object_1" }, { key: "object_1" }, { key: "object_2" }] },
];
const expectedArray = [{ objects: [{ key: "object_1" }, { key: "object_2" }] }];

test("Clean duplicates function modifies original array removing duplicates", () => {
  cleanDuplicates(mockArray, "objects");
  expect(mockArray).toEqual(expectedArray);
});