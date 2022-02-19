const assertArraysEqual = require("../assertArraysEqual")
const without = require("../without")

//Testing without function


//TEST CODE
const words = ["hello", "world", "lighthouse"];

//Testing no words are removed - this passes
let withoutWord = without(words, []);
assertArraysEqual(withoutWord, ["hello", "world", "lighthouse"]);

//Testing when all words are removed, a.k.a two empty arrays - this passes
withoutWord = without(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(withoutWord, []);

//Testing with words not in words, so no words removed - this passes
withoutWord = without(words, ["apples", "bananas"]);
assertArraysEqual(withoutWord, ["hello", "world", "lighthouse"]);

//Testing with removing a word - this fails
withoutWord = without(words, ["hello"]);
assertArraysEqual(withoutWord, ["hello", "world", "lighthouse"]);

assertArraysEqual(without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"]), ["2"])