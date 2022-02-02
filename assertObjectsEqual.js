//a function to check if arrays are equal
const eqArray = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//a function to compare two objects
const eqObjects = function (object1, object2) {
  //using Object.keys to get the keys of both objects, assigning to keys1 and keys2 variables
  let keys1 = Object.keys(object1)
  let keys2 = Object.keys(object2)

  //if the length of the objects aren't the same, stop here
  if (keys1.length !== keys2.length) {
    return false;
  }
  //loop through the keys of object1
  for (const key of keys1) {
    //compare the values for object1 and object2 are the same (checking type too)
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArray(object1[key], object2[key])
    } else if (object1[key] === object2[key]) {
    } else {
      return false;
    }
  }
  //if we've gone through all the checks, the objects are the same and return true
  return true;
};

const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }

};


assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }) // => passes
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }); // => fails
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }) // => passes
// const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }); // => fails
