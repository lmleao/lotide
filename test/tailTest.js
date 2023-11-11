const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("doesn't alter original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("returns appropriate amount of elements", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });

  it("returns Lighthouse as first element", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
  });

  it("returns Labs as second element", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
  });

  it("returns empty array if original array only has one element", () => {
    assert.strictEqual(tail(["test"]).length, 0);
  });

  it("returns empty array if original array is empty", () => {
    assert.strictEqual(tail([]).length, 0);
  });
});