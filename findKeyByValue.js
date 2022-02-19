//A function that takes in an object and a value and returns the first key that corresponds to that value.
const findKeyByValue = function (object, value) {
  let keys = Object.keys(object)
  for (const key of keys) {
    if (object[key] === value) {
      return key
    }
  }
  return undefined;
};

module.exports = findKeyByValue




