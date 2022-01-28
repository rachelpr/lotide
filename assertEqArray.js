// assertEqual function that will test if two objects are equal
const assertEqual = function (actual, expected) {
  //this checks if actual is the same as expected
  if (actual === expected) {
    //outputs they are the same
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    // if they aren't the same
  } else {
    //tells us they aren't
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};


const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
