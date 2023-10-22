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

//assertArraysEqual function
//It should take the results from eqArrays and log an appropriate message
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`❌❌❌ Assertion failed: ${array1} is not equal to ${array2}.`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${array1} is equal to ${array2}.`);
  }
};

const without = function(source, itemsToRemove) {
  //Check if condition matches
  //Make new array without items to be removed
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // should PASS
assertArraysEqual(without([1, 3, 4], [1, 4, 6, 7]), [3]); // should PASS
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]); // should PASS


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);