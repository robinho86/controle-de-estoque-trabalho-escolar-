const db = require('../database/database');

exports.listar = async (req, res) => {
  if (!req.session.usuario) return res.redirect('/login');
  const itens = await db.getItens();
  res.render('estoque', { itens });
};

exports.adicionar = async (req, res,) => {
  if (!req.session.usuario) return res.redirect('/login');
  const { produto, quantidade, adicionadoPor } = req.body;
  await db.addItem(produto, quantidade, adicionadoPor);
  res.redirect('/estoque');
 
};

exports.formEditar = async (req, res) => {
  if (!req.session.usuario) return res.redirect('/login');
  const { id } = req.params;
  const item = await db.getItemById(id);
  const itens = await db.getItens();
  res.render('estoque', { itens, item }); // 🔹 passa lista + item
};

exports.editar = async (req, res) => {
  if (!req.session.usuario) return res.redirect('/login');
  const { id } = req.params;
  const { produto, quantidade } = req.body;
  await db.updateItem(id, produto, quantidade);
  res.redirect('/estoque');
};

exports.remover = async (req, res) => {
  if (!req.session.usuario) return res.redirect('/login');
  const { id } = req.params;
  await db.deleteItem(id);
  res.redirect('/estoque');
};