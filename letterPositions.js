//A function that takes in a string and returns all indices of letter positions in the string.
const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = [i]
    }

  }
  return results;
}

module.exports = letterPositions