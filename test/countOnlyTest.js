const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("returns the correct count of elements specified", () => {
    assert.strictEqual(result["Fang"], 2);
  });

  it("returns undefined if name is not present in Array", () => {
    assert.strictEqual(result["Karima"], undefined);
  });
});