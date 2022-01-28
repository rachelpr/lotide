
const eqArray = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const assertEqArray = function (arr1, arr2) {
  if (eqArray(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

assertEqArray([1, 2, 3], [1, 2, 3])
assertEqArray([1, 2, 3], [3, 2, 1]); // => false
assertEqArray(["1", "2", "3"], ["1", "2", "3"]); // => true
assertEqArray(["1", "2", "3"], ["1", "2", 3]); // => false
