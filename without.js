//A function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
const without = function (arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    let included = true;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        included = false;
      }
    }
    if (included === true) {
      newArray.push(arr1[i])
    }
  }
  return newArray
};

module.exports = without