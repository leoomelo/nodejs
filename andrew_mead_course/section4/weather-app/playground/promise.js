var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			}
			else {
				reject('A e B devem ser números');
			}
		}, 1500)
	})
}

asyncAdd(4, "5").then((res) => {
	console.log('Resultado: ' + res);
	return asyncAdd(res, 30);
}).then( (res) => {
	console.log('Resultado: ' + res);
}).catch((errorMessage) => {
	console.log(errorMessage)
})

// var newpromise = new Promise( (resolve, reject) => {
	
// 	setTimeout(() => {
// 		resolve('Resolve')
// 		//reject('Rejeitou');
// 	}, 2500)
// } );

// newpromise.then( (message)=> {
// 	console.log(message);
// }, (errorMessage) => {
// 	console.log(errorMessage);
// });

