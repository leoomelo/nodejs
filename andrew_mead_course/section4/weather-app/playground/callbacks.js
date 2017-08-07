var getUser = (id, callback) => {

	var user = {
		'name': 'Leonardo',
		'email': 'leoomelo@gmail.com'
	}

	setTimeout(() => {
		callback(user);	
	}, 3000);
}

getUser(123, (user) => {
	console.log(user);
})
