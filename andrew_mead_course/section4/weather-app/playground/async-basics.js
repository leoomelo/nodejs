console.log('Iniciando async');

setTimeout( () => {
	console.log('Depois de 2 segundos');
}, 2000);

setTimeout( () => {
	console.log('Testando 0 segundos');
},0);

console.log('Terminando async');