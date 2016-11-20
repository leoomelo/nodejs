var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("<html><body>Portal de Notícias</body></html>")
});

app.get('/tecnologia', function(req, res) {
  res.send("<html><body>Portal de Tecnologia</body></html>")
});

app.get('/moda', function(req, res) {
  res.send("<html><body>Portal de Moda</body></html>")
});

app.get('/beleza', function(req, res) {
  res.send("<html><body>Portal de Beleza</body></html>")
});

app.listen(3000, function() {
  console.log('Servidor rodando com express');
});
