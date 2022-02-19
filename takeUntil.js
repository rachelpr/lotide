//A function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
const takeUntil = function (array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) !== true) {
      results.push(item)
    } else {
      break;
    }
  }
  return results;
};

module.exports = takeUntil