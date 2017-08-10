const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const varg = yargs
	.option({
		a: {
			demand : true,
			describe : 'Endereço com a respectiva temperatura',
			string : true,
			alias : 'address'
		}
	})
	.help()
	.alias('help', 'h')
	.argv;


geocode.geocodeAddress(varg.a).then( (results) => {
	console.log(JSON.stringify(results, undefined, 2));
	return weather.getWeather(results.latitude, results.longitude)
}).then( (weatherResult) => {
	console.log('Temperatura: ' + ((weatherResult.temperature - 32)/1.8).toFixed(2));
	console.log('Temperatura Aparente: ' + ((weatherResult.apparentTemperature - 32)/1.8).toFixed(2));
}).catch( (errorMessage) => {
	console.log(errorMessage)
})

// geocode.geocodeAddress(varg.a, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	}
// 	else {
// 		console.log(JSON.stringify(results, undefined, 2));
// 		weather.getWeather(results.latitude, results.longitude, (errorWeatherMessage, weatherResult) => {
// 			if (errorWeatherMessage) {
// 				console.log(errorWeatherMessage);
// 			}
// 			console.log('Temperatura: ' + ((weatherResult.temperature - 32)/1.8).toFixed(2));
// 			console.log('Temperatura Aparente: ' + ((weatherResult.apparentTemperature - 32)/1.8).toFixed(2));
// 		})
// 	}

// } );