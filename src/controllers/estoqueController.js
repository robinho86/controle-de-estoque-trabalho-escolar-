const db = require('../database/database');

exports.listar = async (req, res) => {
  if (!req.session.usuario) return res.redirect('/login');
  const itens = await db.getItens();
  res.render('estoque', { itens });
};

exports.adicionar = async (req, res) => {
  if (!req.session.usuario) return res.redirect('/login');
  const { nome, quantidade, adicionadoPor } = req.body;
  await db.addItem(nome, quantidade, adicionadoPor);
  res.redirect('/estoque');
};

exports.remover = async (req, res) => {
  if (!req.session.usuario) return res.redirect('/login');
  const { id } = req.params;
  await db.deleteItem(id);
  res.redirect('/estoque');
};