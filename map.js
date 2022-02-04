//map function will take 2 arguments
//an array to map
//a callback function
//will return a new array based on the results of the callback function
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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArray(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];

const mappedWords = map(words, word => word[0]);
const mappedWords2 = map(words, word => word[1])


assertArraysEqual(mappedWords, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(mappedWords2, ['g', 'c', 't', 'm', 't']);