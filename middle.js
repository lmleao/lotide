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

module.exports = middle;