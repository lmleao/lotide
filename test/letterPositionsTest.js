const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns the index position of the specified letter", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns more than one index position if letter occurs more than once", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').i, [1, 11]);
  });
});