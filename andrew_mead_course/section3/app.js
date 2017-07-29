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
	var note = notes.addNote(title, body);

	if (note) {
		console.log('Nota Adicionada');
		console.log('Titulo: ' + note.title);
		console.log('Conteúdo: ' + note.body)	
	}
	else {
		console.log('Erro ao salvar a nota');
	}
	
}
else if (command === 'list') {
	console.log(notes.getAll());
}
else if (command === 'read') {
	var noteRead = notes.readNote(title);
	if(noteRead) {
		console.log('Nota: ');
		console.log('Titulo: ' + noteRead.title);
		console.log('Conteúdo: ' + noteRead.body);
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
