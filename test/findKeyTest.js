const assertEqual = require("../assertEqual")
const findKey = require("../findKey")

//TEST CODE
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)) // => "noma"

const restaurantRatings = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}
const results1 = findKey(restaurantRatings, x => x.stars === 2)
console.log(results1)

assertEqual(results1, "noma") //pass
assertEqual(results1, "elBulli") //fail
assertEqual(results1, "") //fail