const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns the amount of occurrences of a letter in a string", () => {
    const result = countLetters('lighthouse labs');
    assert.strictEqual(result["h"], 2);
  });

  it("returns undefined if there are no occurrences of the specified letter", () => {
    const result = countLetters('lighthouse labs');
    assert.strictEqual(result["r"], undefined);
  });
});