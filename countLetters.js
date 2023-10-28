const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {};

  for (const letters of string) {
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  
  return result;
};

const result1 = countLetters('LHL');
const result2 = countLetters('lighthouse labs');

//Test cases
assertEqual(result1["L"], 2);
assertEqual(result2["h"], 2);
assertEqual(result1[" "], undefined);
assertEqual(result2["r"], undefined);