const tail = function (arr1) {
  if (arr1.length <= 1) {
    return [];
  } else {
    return arr1.slice(1);
  }
};

module.exports = tail


