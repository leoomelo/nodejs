const http = require('http');

const request = require('request-promise');

const options = {
	method: 'GET',
	uri: 'http://www.google.com'
}

request(options).then(function(response) {

	console.log(response);
})
.catch(function(err) {

})