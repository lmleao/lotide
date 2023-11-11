const assertObjectsEqual = require('../assertObjectsEqual');

//Test Cases
assertObjectsEqual({ color: "red", size: "medium" }, { color: "red", size: "medium"});
assertObjectsEqual({ color: "pink", items: 20 }, { color: "pink", items: 20 });