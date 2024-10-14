// in the folder HELPERS
// create file multiplyByTwo.js
/* in that file:
export const multiplyByTwo = (a) => {
	return a * 2;
};
*/

// import one function especially
import { multiplyByTwo } from "./helpers/multiplyByTwo.js";

const result1 = multiplyByTwo(333);
console.log(result1);

// import all the functions from file
import * as helper from "./helpers/multiplyByTwo.js";
const result2 = helper.multiplyByTwo(123);
console.log(result2);
