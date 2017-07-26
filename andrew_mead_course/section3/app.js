console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

var yargs = require('yargs');

var command = yargs.argv._[0];

var title = yargs.argv.title;
var body = yargs.argv.body;

console.log('Command: ' + command);

if (command === 'add') {
	console.log('Adding note');
	notes.addNote(title, body);
}
else if (command === 'list') {
	console.log(notes.getAll());
}
else if (command === 'read') {
	var result = notes.readNote(title);
	console.log(result);
}
else if (command === 'remove') {
	notes.removeNote(title);
}
else {
	console.log('Command not recognized');
}
