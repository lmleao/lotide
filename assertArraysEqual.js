const eqArrays = require('./eqArrays');

//Implement assertArraysEqual function
//It should take the results from eqArrays and log an appropriate message
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`❌❌❌ Assertion failed: ${array1} !== ${array2}.`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}.`);
  }
};

module.exports = assertArraysEqual;