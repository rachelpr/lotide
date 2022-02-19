
//will take an object and a callback
//loop the object and return the first key that return truthy (from callback)
//if no key found - return undefined
const findKey = function (object, callback) {
  const keys = Object.keys(object)
  for (const key of keys) {
    if (callback(object[key]) === true) {
      return key
    }
  }
  return undefined;

};

module.exports = findKey