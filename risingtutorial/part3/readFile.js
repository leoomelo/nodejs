'use strict'

const fs = require('fs');

let contentGlobal

contentGlobal = fs.readFile('Test.pdf', 'utf-8', function(err, content) {
	if (err) {
		console.log(err);
	}

	console.log(content);
});

console.log('is content global '+ contentGlobal);
