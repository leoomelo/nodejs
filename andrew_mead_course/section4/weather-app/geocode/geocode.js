
const request = require('request');

module.exports.geocodeAddress = (address, callback) => {

	var defaultURL = 'http://maps.googleapis.com/maps/api/geocode/json?address='
	var encodedAddress = encodeURIComponent(address);

	request({
		url: defaultURL + encodedAddress,
		json: true
	}, (error, response, body) => {

		if (error) {
			callback('Não foi possível atender sua solicitação');
		}
		else if (body.status === 'ZERO_RESULTS') {
			callback('Não foi encontrado nenhum resultado com o endereço informado');
		}
		else if (body.status === 'OK') {
			var results = {
				endereco : body.results[0].formatted_address,
				latitude : body.results[0].geometry.location.lat,
				longitude : body.results[0].geometry.location.lng
			}
			
		 	callback(null, results);
		}
		else {
			callback('Status desconhecido');
		}
	});	
}

