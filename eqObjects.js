const eqArrays = require("./eqArrays");

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
      return eqArrays(object1[key], object2[key])
    } else if (object1[key] === object2[key]) {
    } else {
      return false;
    }
  }
  //if we've gone through all the checks, the objects are the same and return true
  return true;
};

module.exports = eqObjects