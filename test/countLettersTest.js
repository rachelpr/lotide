const countLetters = require("../countLetters")
const assertEqual = require("../assertEqual")


//TEST COST - works
const testSentence = "Gus stinks"

const result1 = countLetters(testSentence, { "G": true, "u": true, "s": true });

assertEqual(result1["G"], 1);
assertEqual(result1["u"], 1);
assertEqual(result1["s"], 1);


console.log(countLetters("lighthouse in the house", {
  l: true,
  i: true,
  g: true,
  h: true,
  t: true,
  o: true,
  u: true,
  s: true,
  e: true,
  n: true,
}));

