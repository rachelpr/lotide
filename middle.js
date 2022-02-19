//A function that takes in an array and returns middle most element of the array.
const middle = function (arr1) {
  let middleIndex = Math.floor(arr1.length / 2)
  if (arr1.length <= 2) {
    return [];
  }
  if (arr1.length % 2 !== 0) {
    return [arr1[middleIndex]]
  } else {
    return [arr1[middleIndex - 1], arr1[middleIndex]]
  }
};


module.exports = middle