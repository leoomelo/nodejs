
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

var yargs = require('yargs');

var command = yargs.argv._[0];

var title = yargs.argv.title;
var body = yargs.argv.body;

console.log('Command: ' + command);

if (command === 'add') {
	var note = notes.addNote(title, body);
	if (note) {

		notes.logNote(note);
	}
	else {
		console.log('Erro ao salvar a nota');
	}
	
}
else if (command === 'list') {
	var allNotes = notes.getAll();
	allNotes.forEach((note) => console.log(note));
}
else if (command === 'read') {
	var noteRead = notes.readNote(title);
	if(noteRead) {
		notes.logNote(noteRead);
	}
	else {
		console.log('Nota não encontrada');
	}
}
else if (command === 'remove') {
	var noteRemoved = notes.removeNote(title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message); 
}

else {
	console.log('Command not recognized');
}
