const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const port = 3000;

app.engine('.hbs', exphbs({
	defaultLayout : 'main',
	extname : '.hbs',
	layoutsDir : path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	res.render('home', {
		name : 'John'
	})
})

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send('Something broke!');
})

app.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened');
	}

	console.log(`server is listening on port ${port}`);
})