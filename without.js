// The without function makes a new array when provided with
// two arrays passed as arguments, the first serving as the source array
// and the second serving as the items to be removed from the source array.
const without = function(source, itemsToRemove) {
  //Check if condition matches
  //Make new array without items to be removed
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;