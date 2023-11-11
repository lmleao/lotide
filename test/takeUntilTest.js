const assert = require('chai').assert;
const takeUntil = require('../takeUntil');


describe("#takeUntil", () => {
  it("returns a new array with elements before the condition specified in the callback function", () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data, x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });
});