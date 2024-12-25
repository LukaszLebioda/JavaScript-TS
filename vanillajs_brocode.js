// -------------------------------------
// ctrl + opt + N => to run the code
// tsc -w => to watch changes in .ts file
// -------------------------------------

// inserting text into html tags
let header = "Hello";
document.getElementById("myHeader").textContent = `:) ${header}`;
// accepting user input with textbox
document.getElementById("myButton").onclick = function () {
	let username = document.getElementById("myInput").value;
	document.getElementById("myHeader").textContent += ` ${username}!`;
};
