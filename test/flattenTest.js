const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("turns an array with nested elements into a single-level array", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});