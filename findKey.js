
//will take an object and a callback
//loop the object and return the first key that return truthy (from callback)
//if no key found - return undefined
const findKey = function (object, callback) {
  // console.log('object ', object);
  // console.log('callback: ', callback);
  const keys = Object.keys(object)
  for (const key of keys) {
    // console.log("Key:", key)
    // console.log("Callback", callback(object[key]))
    // console.log("---")
    if (callback(object[key]) === true) {
      return key
    }
  }
  return undefined;

};

module.exports = findKey