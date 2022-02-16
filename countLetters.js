
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


module.exports = countLetters