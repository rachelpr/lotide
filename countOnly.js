
const countOnly = function (allItems, itemsToCount) {
  //defining an empty object
  const results = {};
  //loop over all the items
  for (const item of allItems) {
    //check if the results[item] is in the itemsToCount (a.k.a is this an item we should be counting)
    if (itemsToCount[item]) {
      //increment the counter for results[item] if found
      if (results[item]) {
        results[item] += 1;
        //else the results[item] counter remains at 1
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly