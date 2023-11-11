const assertArraysEqual = require('../assertArraysEqual');

//Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); //should PASS
assertArraysEqual([1, 3, 2], [1, 4, 3]); //should FAIL