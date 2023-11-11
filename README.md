# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lmleao/lotide`

**Require it:**

`const _ = require('@lmleao/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Assertion function for Arrays
* `assertEqual`: Assertion function (not applicable to Arrays or Objects)
* `assertObjectsEqual`: Assertion function for Objects
* `countLetters`: Returns an Object with a count of each letter occurrence
* `countOnly`: Returns an Object with a count of only the elements that were passed as an argument
* `eqArrays`: Checks if Arrays are equal
* `eqObjects`: Checks if Objects are equal
* `findKey`: Finds Key which corresponds to the callback function provided as an argument
* `findKeyByValue`: Finds Key which has a value corresponding to the value provided as an argument
* `flatten`: Flattens a nested Array into a single-level Array
* `head`: Returns the head element of an Array
* `letterPositions`: Finds the index position of letters in a sentence
* `map`: Creates a new Array using the callback function provided as an argument
* `middle`: Finds the middle element of an Array
* `tail`: Finds the tail elements of an Array
* `takeUntil`: Creates a new Array by iterating over items until the condition provided as a callback function returns true
* `without`: Creates a new Array without the items specified as an argument