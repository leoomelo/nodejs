const numbers = [2, 4, 1, 5, 4];

function isBiggerThanTwo(arr) {
	return arr > 2;
}

console.log(numbers.filter(isBiggerThanTwo));