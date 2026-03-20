const db = require('../database/database');

exports.formCadastro = (req, res) => {
  res.render('cadastro');
};

exports.cadastrar = async (req, res) => {
  const { nome, email, telefone, senha, setor, funcao } = req.body;
  await db.addUsuario(nome, email, telefone, senha, setor, funcao);
  res.redirect('/login');
};