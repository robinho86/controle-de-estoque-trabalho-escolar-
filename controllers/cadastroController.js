const db = require('../models/database');

exports.formCadastro = (req, res) => {
  res.render('cadastro');
};

exports.cadastrar = async (req, res) => {
  const { nome, email, telefone, senha } = req.body;
  await db.addUsuario(nome, email, telefone, senha);
  res.redirect('/login');
};