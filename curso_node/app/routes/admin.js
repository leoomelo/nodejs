module.exports = function(app) {
  app.get('/formulario_inclusao_noticia', function(req, res) {
    res.render("admin/form_add_noticia")
  });

  app.post('/noticias/salvar', function(req, res) {
    var noticia = req.body;
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel;

    noticiasModel.salvarNoticia(noticia, connection, function(err, result) {
      res.redirect('/noticias');
    });
  })
}