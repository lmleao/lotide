const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) {
    return false;
  }

  for (let key of objKeys1) {
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      // If both values are objects, recursively call eqObjects
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;

};

module.exports = eqObjects;