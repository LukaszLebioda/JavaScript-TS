// funkcja przyjmuje tablicę i jakiś callback
function greaterThanSix(arr, callback) {
	for (let i = 0; i > arr.length; i++) {
		const element = arr[i];
		if (element > 6) {
			callback(arr[i]);
		}
	}
}

// callback przekazywany jako argument
function printNumber(num) {
	console.log(num);
}

// tablica przekazywana jako argument
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// wywołanie funkcji
greaterThanSix(arr, printNumber);

// wywołanie funkcji anonimowej jako callbacku
greaterThanSix(arr, function (data) {
	console.log("Data:", data);
});
