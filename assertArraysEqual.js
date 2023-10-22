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

//Implement assertArraysEqual function
//It should take the results from eqArrays and log an appropriate message
const assertArraysEqual = function(arg) {
  if (!arg) {
    console.log(`❌❌❌ Assertion failed! Arrays are not equal.`);
  } else {
    console.log(`✅✅✅ Assertion passed! Arrays are equal.`);
  }
};

//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); => should PASS