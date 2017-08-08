const request = require('request');
const API_SECRET_KEY = '20772115fb26ebcc58425f818e4d7d93';

module.exports.getWeather = (latitude, longitude, callback) => {

	request({
		url: `https://api.darksky.net/forecast/${API_SECRET_KEY}/${latitude},${longitude}`,
		json: true 
	}, (error, response, body) => {
		if (error) {
			callback('Não foi possível buscar a temperatura');
		}
		else {
			callback(null, body.currently);	
		}
	})
}

// 20772115fb26ebcc58425f818e4d7d93
// https://api.darksky.net/forecast/20772115fb26ebcc58425f818e4d7d93/37.8267,-122.4233