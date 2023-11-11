const eqArrays = require('./eqArrays');

//Implement assertArraysEqual function
//It should take the results from eqArrays and log an appropriate message
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`❌❌❌ Assertion failed: ${array1} is not equal to ${array2}.`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${array1} is equal to ${array2}.`);
  }
};

module.exports = assertArraysEqual;