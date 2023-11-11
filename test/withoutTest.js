const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns the correct elements", () => {
    assert.deepEqual(without([1, 3, 4], [1, 4, 6, 7]), [3]);
  });

  it("type coercion does not happen", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("does not modify original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});