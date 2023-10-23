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

//Function that when given an array with other arrays inside, will flatten them
//into a single-level array
const flatten = function(array) {
  let newArray = [];
  
  //Loop through objects in the outer array
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) { //If object is an array, create another loop
      for (let n = 0; n < array[i].length; n++) {
        newArray.push(array[i][n]); //Add nested elements to newArray
      }
    } else {
      newArray.push(array[i]); //Add results to newArray
    }
  }
  return newArray;
};

//Test Case: Make sure function is working as expected by comparing the arrays
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);