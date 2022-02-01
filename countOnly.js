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
        results[item] = 1
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);