function times2(arr) {
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		arr2[i] = arr[i]*2;
	}
	return arr2;
}

// console.log(times2([0,1,2,3,4,5]))

console.log([0,1,2,3,4,5].map(x => x * 2))
