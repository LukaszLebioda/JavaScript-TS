// -----------------------------------------------------
// FUNCTION EXPRESSION
// anonymous function assigned to a variable

const multiply = function (a, b) {
	return a * b;
};

console.log(multiply(10, 20));

// -----------------------------------------------------
// CALLBACK - example 1
// simple function that will be used as callback
function show(txt) {
	console.log(txt);
}

// main function with array and callback as parameters
// this function will execute callback on every array element
function showArr(myArr, blabla) {
	for (let i = 0; i < myArr.length; i++) {
		blabla(myArr[i]);
	}
}

const myArr = [1, 2, 3, 4, 5, 6, 7];
showArr(myArr, show);

// -----------------------------------------------------
// CALLBACK - example 2
function greaterThanSix(myArr, someCallback) {
	for (let i = 0; i < myArr.length; i++) {
		if (myArr[i] > 6) {
			someCallback(myArr[i]);
		}
	}
}

const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 11, 12];

function print(data) {
	console.log("data from callback: ", data);
}

// with callback
greaterThanSix(myArr2, print);

// with anonymous function
greaterThanSix(myArr2, function (data) {
	console.log("data from anonymous callback: ", data);
});
