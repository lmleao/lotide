//eqArrays function
const eqArrays = function(arr1, arr2) {
  //First compare array lengths
  if (arr1.length !== arr2.length) {
    return false;
  }

  //Loop through each array and compare each index
  for (let i = 0; i < arr1.length; i++) {
    //Check if elements are an array and compare them recursively
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  //If all elements match, return true
  return true;
};

module.exports = eqArrays;