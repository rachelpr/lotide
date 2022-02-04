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

//will take two parameters - an array and callback
//return a slice of the array until the callback returns truthy
const takeUntil = function (array, callback) {
  const results = [];
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    if (callback(item) !== true) {
      results.push(item)
    } else {
      break;
    }
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);

//console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2])
assertArraysEqual(results1, [1, 2, 5, 7, -1])
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])
assertArraysEqual(results2, ["I've", "been", "to", "Redwood"])