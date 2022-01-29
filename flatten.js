const eqArray = function (arr1, arr2) {
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

const flatten = function (arr1) {
  let flattened = []
  for (let i = 0; i < arr1.length; i++) {
    if (!Array.isArray(arr1[i])) {
      flattened.push(arr1[i])
    }
    for (let j = 0; j < arr1[i].length; j++) {
      if (!Array.isArray(arr1[i][j])) {
        flattened.push(arr1[i][j])
      }
    }
  }
  return flattened
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]