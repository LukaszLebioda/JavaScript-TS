// // ES module import
// import sum from "./script";

// common.js import
const sum = require("./script");

test(" adds 1 + 2 to equal 3", () => {
	expect(sum(1, 2)).toBe(3);
});
