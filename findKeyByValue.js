// assertEqual function that will test if two objects are equal
const assertEqual = function (actual, expected) {
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

const findKeyByValue = function (object, value) {
  result = {}
  //scan the object and return the first key which contains the given value
  for (const key in object) {
    //console.log(key, object[key])
    if (object[key] !== value) {
      result = undefined;
    } else {
      result = key
    }
  }

  return result;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);





// Object.keys(object).forEach((key) => {
//   if (object[key] === value) {
//     result += key
//   } else {
//     return undefined;
//   }

// let keys = Object.keys(object)

// for (const keys of object) {
//   if (value[keys]) {
//     if (result[keys]) {
//       result[keys] += 1
//     }
//   }
// }