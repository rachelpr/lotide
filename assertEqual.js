// assertEqual function that will test if two objects are equal
const assertEqual = function(actual, expected) {
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


// Test Cases
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Frankie", "Frankie");
assertEqual(1, 5);
