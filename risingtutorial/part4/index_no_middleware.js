const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello from express!');
})

app.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened');
	}

	console.log(`server is listening on port ${port}`);
})