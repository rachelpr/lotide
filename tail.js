//A function that takes in an array and returns everything except the first element of the array.
const tail = function (arr1) {
  if (arr1.length <= 1) {
    return [];
  } else {
    return arr1.slice(1);
  }
};

module.exports = tail


