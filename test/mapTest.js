const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it("returns a new array with the element specified in the callback function", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
});