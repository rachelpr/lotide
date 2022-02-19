const assertObjectsEqual = require("../assertObjectsEqual")

assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }) // => passes
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }); // => fails
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }) // => passes
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }); // => fails