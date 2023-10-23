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

//Implement middle function
//It should return the middle element of an array
//If the array only has 2 elements, it returns an empty array
//If the array has an odd number of elements, it will return 1 element
//If the array has an even number of elements, it will return the 2 middle elements
const middle = function(array) {
  let newArray = [];
  const middleIndex = Math.floor(array.length / 2);

  //Use array.length to determine if it has more than 2 elements
  if (array.length > 2) {
    if (array.length % 2 !== 0) {
      newArray.push(array[middleIndex]);
    } else {
      newArray.push(array[middleIndex - 1], array[middleIndex]);
    }
  }
  return newArray;
};

//Test Cases to ensure function runs as expected
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2]), []);