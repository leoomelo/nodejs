'use strict'

const fs = require('fs');

let content

try {
	content = fs.readFileSync('Test.pdf', 'utf-8');
}
catch(ex) {
	console.log(ex);
}

console.log(content);
