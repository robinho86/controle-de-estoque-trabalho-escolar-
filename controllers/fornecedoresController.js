const db = require('../models/database');

exports.listar = async (req, res) => {
  if (!req.session.usuario) return res.redirect('/login');
  const fornecedores = await db.getFornecedores();
  res.render('fornecedores', { fornecedores });
};

exports.adicionar = async (req, res) => {
  if (!req.session.usuario) return res.redirect('/login');
  const { nome, telefone, email, produto } = req.body;
  await db.addFornecedor(nome, telefone, email, produto);
  res.redirect('/fornecedores');
};

exports.remover = async (req, res) => {
  if (!req.session.usuario) return res.redirect('/login');
  const { id } = req.params;
  await db.deleteFornecedor(id);
  res.redirect('/fornecedores');
};