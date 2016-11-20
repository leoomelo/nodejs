var http = require('http');

var server = http.createServer(function(req, res) {
  var categoria = req.url;
  if(categoria == "/tecnologia") {
      res.end("<html><body>Porta de Tecnologia</body></html>");
  }
  else if (categoria == "/moda") {
    res.end("<html><body>Porta de Moda</body></html>");
  }
  else if (categoria == "/beleza") {
    res.end("<html><body>Porta de Beleza</body></html>");
  }
  else {
      res.end("<html><body>Porta de Notícias</body></html>");
  }
});

server.listen(3000);
