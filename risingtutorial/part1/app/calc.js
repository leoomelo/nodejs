function sum(arr) {
	return arr.reduce(function(a, b) {
		return a + b;
	}, 0)
}

module.exports.sum = sum;

// var calc = {

// 	sum : function (sourceArray) {

// 		var result = 0;

// 		for (var i = 0; i < sourceArray.length; i++) {
// 			result += sourceArray[i];
// 		}

// 		return result;
// 	}
// }




// module.exports = calc;

