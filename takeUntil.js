
//will take two parameters - an array and callback
//return a slice of the array until the callback returns truthy
const takeUntil = function (array, callback) {
  const results = [];
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  for (let item of array) {
    // console.log('Item: ', item);
    // console.log('Callback: ', callback(item));
    // console.log('---');
    if (callback(item) !== true) {
      results.push(item)
    } else {
      break;
    }
  }
  return results;
};

module.exports = takeUntil