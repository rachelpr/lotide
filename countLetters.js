// assertEqual function that will test if two objects are equal
const assertEqual = function (actual, expected) {
  //this checks if actual is the same as expected
  if (actual === expected) {
    //outputs they are the same
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    // if they aren't the same
  } else {
    //tells us they aren't
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function to take in a sentence (as a string) and return count of each of the letters in that sentence
const countLetters = function (sentence, lettersToCount) {
  const results = {};
  for (const letter of sentence) {
    if (lettersToCount[letter]) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};



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


//TEST COST - works
// const testSentence = "Gus stinks"

// const result1 = countLetters(testSentence, { "G": true, "u": true, "s": true });

// assertEqual(result1["G"], 1);
// assertEqual(result1["u"], 1);
// assertEqual(result1["s"], 1);