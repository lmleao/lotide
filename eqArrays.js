//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

//eqArrays function
const eqArrays = function(arr1, arr2) {
  //First compare array lengths
  if (arr1.length !== arr2.length) {
    return false;
  }

  //Loop through each array and compare each index
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; //If any elements don't match, return false
    }
  }

  //If all elements match, return true
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);