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

//will take an object and a callback
//loop the object and return the first key that return truthy (from callback)
//if no key found - return undefined
const findKey = function (object, callback) {
  // console.log('object ', object);
  // console.log('callback: ', callback);
  const keys = Object.keys(object)
  for (const key of keys) {
    // console.log("Key:", key)
    // console.log("Callback", callback(object[key]))
    // console.log("---")
    if (callback(object[key]) === true) {
      return key
    }
  }
  return undefined;

};

// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2)) // => "noma"

const restaurantRatings = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}
const results1 = findKey(restaurantRatings, x => x.stars === 2)
console.log(results1)

assertEqual(results1, "noma")
assertEqual(results1, "elBulli")