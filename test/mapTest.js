const assertArraysEqual = require("../assertArraysEqual")
const map = require("../map")




//Test Code
const words = ["ground", "control", "to", "major", "tom"];

const mappedWords = map(words, word => word[0]);
const mappedWords2 = map(words, word => word[1])


assertArraysEqual(mappedWords, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(mappedWords2, ['g', 'c', 't', 'm', 't']);