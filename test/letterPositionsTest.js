const assertArraysEqual = require("../assertArraysEqual")
const letterPositions = require("../letterPositions")

//Test Code
console.log(letterPositions("lighthouse"))


assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);