
//function to take in a sentence (as a string) and return count of each of the letters in that sentence
const countLetters = function (sentence) {
  const results = {};
  for (letter of sentence) {
    if (letter !== " ") {
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