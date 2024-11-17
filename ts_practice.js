"use strict";
// -------------------------------------
// ctrl + opt + N => to run the code
// tsc -w => to watch changes in ts file
// -------------------------------------
let nameInput = "Kasia";
const isValidName = nameInput == "";
console.log(isValidName);
if (!isValidName) {
    console.log("We got a name!");
}
