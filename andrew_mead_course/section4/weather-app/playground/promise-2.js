const request = require('request');

var geocodeAddress = (address) => {
	return new Promise( (resolve, reject) => {
		if(address) {
			var defaultURL = 'http://maps.googleapis.com/maps/api/geocode/json?address='
			var encodedAddress = encodeURIComponent(address);

			request({
				url: defaultURL + encodedAddress,
				json: true
			}, (error, response, body) => {

				if (error) {
					reject('Não foi possível atender sua solicitação');
				}
				else if (body.status === 'ZERO_RESULTS') {
					reject('Não foi encontrado nenhum resultado com o endereço informado');
				}
				else if (body.status === 'OK') {
					var results = {
						endereco : body.results[0].formatted_address,
						latitude : body.results[0].geometry.location.lat,
						longitude : body.results[0].geometry.location.lng
					}
					
				 	resolve(results);
				}
				else {
					reject('Status desconhecido');
				}
			});	
		}
	});
}


geocodeAddress('key west fl').then((location) => {
	console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
	console.log(errorMessage);
})