const arr = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]
let sum = 0

for (let i = 0; i < arr.length; i += 1) {
	const el = arr[i]
	sum = sum + el
	if (el > 0) console.log(el)
}

console.log(sum)
