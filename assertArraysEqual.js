//A function that will take in two arrays and console.log an appropriate message to the console.
const eqArray = require("./eqArrays")

const assertArraysEqual = function (arr1, arr2) {
  if (eqArray(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

module.exports = assertArraysEqual
