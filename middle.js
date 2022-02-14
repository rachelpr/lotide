
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


module.exports = middle