//A function that takes in 2 objects and return true if they are equal and false otherwise.
const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1)
  let keys2 = Object.keys(object2)
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key])
    } else if (object1[key] === object2[key]) {
    } else {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects