console.log('Starting notes');

const fs = require('fs');

var readFileNotes = function() {
	try {
		var notesString = fs.readFileSync('notes.json');
		return JSON.parse(notesString);
	}
	catch(e) {
		console.log(e);
		return [];
	}
}

var saveFile = function(notes) {
	fs.writeFileSync('notes.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
	
	var notes = []
	
	var note = {
		title: title,
		body: body
	}

	readFileNotes(notes);

	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);	
		saveFile(notes);
		return note;
	}

}

var getAll = () => {
	
	var notes = readFileNotes();

	return JSON.parse(notes);
}

var removeNote = (title) => {
	
	var notes = readFileNotes();
	var filteredNotes = notes.filter((note) => (note.title !== title));
	saveFile(filteredNotes);

	return notes.length !== filteredNotes.length;
}

var readNote = (title) => {
	
	var notes = readFileNotes();
	var filteredNotes = notes.filter((note) => (note.title === title));
	return filteredNotes[0];
}

module.exports = {
	addNote : addNote,
	getAll : getAll,
	removeNote : removeNote,
	readNote: readNote
};