// test/headTest.js

const assertEqual = require('../assertEqual');
const head = require('../head');

// Test functions
// Test case: Check the first element of an array of numbers
assertEqual(head([5,6,7]), 5);

// Test case: Check the first element of an array of strings
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// Test case: Check the first element of an array with a single number
assertEqual(head([1]), 1);

// Test case: Check the first element of an empty array
assertEqual(head([]), undefined);