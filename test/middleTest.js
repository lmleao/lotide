const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns 1 element if array has odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns 2 elements if array has even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns empty array if original array only has 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});