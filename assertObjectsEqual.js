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

const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) {
    return false;
  }

  for (let key of objKeys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (!eqObjects(actual, expected)) {
    console.log(`❌❌❌ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

assertObjectsEqual({ color: "red", size: "medium" }, { color: "red", size: "medium"});