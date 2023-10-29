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
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`❌❌❌ Assertion failed: ${array1} is not equal to ${array2}.`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${array1} is equal to ${array2}.`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];

    if (character !== ' ') {
      if (results[character]) {
        results[character].push(i);
      } else {
        results[character] = [i];
      }
    }
  }

  return results;
};

//Test cases
assertArraysEqual(letterPositions("hello").e, [1]);

const result = letterPositions('lighthouse in the house');
assertArraysEqual(result['l'], [0]);
assertArraysEqual(result['i'], [1, 11]);