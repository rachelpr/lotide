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

//take an array and return the middle-most element
const middle = function (arr1) {
  let middleIndex = Math.floor(arr1.length / 2)
  //if arrays has one or two elements, will return empty array, there is no middle
  if (arr1.length <= 2) {
    return [];
  }
  //check if index length is odd, single middle element is returned
  if (arr1.length % 2 !== 0) {
    return [arr1[middleIndex]]
    //arrays with even num of elements, the two middle elements are returned
  } else {
    return [arr1[middleIndex - 1], arr1[middleIndex]]
  }
};


//TEST CODE

//assertArraysEqual(middle([1], [])) // => []
// console.log(middle([1, 2])) // => []
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

const words = ["hello", "lighthouse", "labs", "is", "cool"];
let middleWord = middle(words)

assertArraysEqual(middleWord, ["labs"]) //passes
assertArraysEqual(middleWord, ["lighthouse"]) //fails