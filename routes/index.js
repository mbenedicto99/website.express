var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shellmaker.io' });
});

/* GET new page. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Novo Cadastro' });
});

/* POST new page. */
router.post('/new', function(req, res, next) {
	var nome = req.body.nome;
	var idade = req.body.nome;
  res.redirect('/?nome=' + nome);
});

/* GET Cadastro. */
router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'Se cadastre no Shellmaker.io' });
});

/* POST Cadastro. */
router.post('/cadastro', function(req, res, next) {
	var nome = req.body.nome;
	var email = req.body.email;
	var git = req.body.git;
  res.redirect('/?nome=' + nome);
});

module.exports = router;
