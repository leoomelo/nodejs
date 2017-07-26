console.log('Starting notes');

const fs = require('fs');

var addNote = (title, body) => {
	
	var notes = []
	
	var note = {
		title: title,
		body: body
	}

	try {
		var notesString = fs.readFileSync('notes.json');
		notes = JSON.parse(notesString);
	}
	catch(e) {
		console.log(e);
	}

	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);	
		fs.writeFileSync('notes.json', JSON.stringify(notes));
	}

}

var getAll = () => {
	
	var notes = fs.readFileSync('notes.json');

	return JSON.parse(notes);
}

var removeNote = (title) => {
	
	var notes = fs.readFileSync('notes.json');
	var notesObj = JSON.parse(notes);

	for (var i = 0; i < notesObj.length; i++) {
		if (notesObj[i].title === title) {
			notesObj.splice(i, i + 1);
		}
	}

	console.log(notesObj);
	fs.writeFileSync('notes.json', JSON.stringify(notesObj));
}

var readNote = (title) => {
	
	var notes = fs.readFileSync('notes.json');
	var notesObj = JSON.parse(notes);

	for (var i = 0; i < notesObj.length; i++) {
		if (notesObj[i].title === title) {
			return notesObj[i];
		}
	}
}

module.exports = {
	addNote : addNote,
	getAll : getAll,
	removeNote : removeNote,
	readNote: readNote
};