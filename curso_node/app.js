var app = require('./config/server');
var consign = require('consign');

app.listen(3000, function() {
  console.log('Servidor rodando com express agora');
});
