const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(varg.a, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	}
	else {
		console.log(JSON.stringify(results, undefined, 2));
	}

} );