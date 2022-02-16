
const findKeyByValue = function (object, value) {
  //scan the object and return the first key which contains the given value
  let keys = Object.keys(object)
  for (const key of keys) {
    if (object[key] === value) {
      return key
    }
  }
  return undefined;
};

module.exports = findKeyByValue




