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

module.exports = flatten;