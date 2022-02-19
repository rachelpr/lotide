//A function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
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

module.exports = flatten