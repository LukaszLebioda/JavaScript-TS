// -------------------------------------
// ctrl + opt + N => to run the code
// -------------------------------------

function test(arr) {
	function show(data) {
		console.log(data);
	}
	for (let i = 0; i < arr.length; i++) {
		show(arr[i] * 2);
	}
}
test([1, 2, 3, 4, 5, 6, 7]);
