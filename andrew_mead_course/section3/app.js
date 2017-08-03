
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

const yargs = require('yargs');

const titleOptions = {
			describe: 'Titulo da nota',
			demand: true,
			alias: 't'
		};

const bodyOptions = {
			describe: 'Corpo da nota',
			demand: true,
			alias: 'b'	
		}

const argv = yargs
	.command('add', 'Adiciona uma nota', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'Lista todas as notas')
	.command('read', 'Recupera uma nota baseada no seu título', {
		title: titleOptions
	})
	.command('remove', 'Remove uma nota baseada no seu título', {
		title: titleOptions
	})
	.help()
	.argv;

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
	console.log(`Listando ${allNotes.length} notas`)
	allNotes.forEach((note) => notes.logNote(note));
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
