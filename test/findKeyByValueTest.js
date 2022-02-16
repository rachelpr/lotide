const assertEqual = require("../assertEqual")
const findKeyByValue = require("../findKeyByValue")

//Test Code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // pass