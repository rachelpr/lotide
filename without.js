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

const without = function (arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    let included = true;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        included = false;
      }
    }
    if (included === true) {
      newArray.push(arr1[i])
    }
  }
  return newArray
};

//Testing withour function
//console.log(without([1, 2, 3], [1])) // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

//Testing if arrays are empty
const words = ["hello", "world", "lighthouse"];

//Testing no words are removed - this passes
let withoutWord = without(words, []);
assertArraysEqual(withoutWord, ["hello", "world", "lighthouse"]);

//Testing when all words are removed, a.k.a two empty arrays - this passes
withoutWord = without(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(withoutWord, []);

//Testing with words not in words, so no words removed - this passes
withoutWord = without(words, ["apples", "bananas"]);
assertArraysEqual(withoutWord, ["hello", "world", "lighthouse"]);

//Testing with removing a word - this fails
withoutWord = without(words, ["hello"]);
assertArraysEqual(withoutWord, ["hello", "world", "lighthouse"]);