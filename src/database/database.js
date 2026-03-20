require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('././estoque.db')
const dbpath = process.env.DB_PATCH 

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, email TEXT, telefone TEXT, senha TEXT, setor TEXT, funcao TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS fornecedores (id INTEGER PRIMARY KEY, nome TEXT, telefone TEXT, email TEXT, produto TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS itens (id INTEGER PRIMARY KEY, nome TEXT, quantidade INTEGER, adicionadoPor TEXT)");
});

// Usuários
exports.addUsuario = (nome, email, telefone, senha, setor, funcao) => new Promise((resolve, reject) => {
  db.run("INSERT INTO usuarios (nome, email, telefone, senha, setor, funcao) VALUES (?, ?, ?, ?, ?, ?)", [nome, email, telefone, senha, setor, funcao], function(err) {
    if (err) reject(err);
    resolve(this.lastID);
  });
});

exports.getUsuarioByEmail = (email) => new Promise((resolve, reject) => {
  db.get("SELECT * FROM usuarios WHERE email = ?", [email], (err, row) => err ? reject(err) : resolve(row));
});

// Fornecedores
exports.getFornecedores = () => new Promise((resolve, reject) => {
  db.all("SELECT * FROM fornecedores", [], (err, rows) => err ? reject(err) : resolve(rows));
});

exports.addFornecedor = (nome, telefone, email, produto) => new Promise((resolve, reject) => {
  db.run("INSERT INTO fornecedores (nome, telefone, email, produto) VALUES (?, ?, ?, ?)", [nome, telefone, email, produto], function(err) {
    if (err) reject(err);
    resolve(this.lastID);
  });
});

exports.deleteFornecedor = (id) => new Promise((resolve, reject) => {
  db.run("DELETE FROM fornecedores WHERE id = ?", [id], err => err ? reject(err) : resolve());
});

// Itens
exports.getItens = () => new Promise((resolve, reject) => {
  db.all("SELECT * FROM itens", [], (err, rows) => err ? reject(err) : resolve(rows));
});

exports.addItem = (nome, quantidade, adicionadoPor) => new Promise((resolve, reject) => {
  db.run("INSERT INTO itens (nome, quantidade, adicionadoPor) VALUES (?, ?, ?)", [nome, quantidade, adicionadoPor], function(err) {
    if (err) reject(err);
    resolve(this.lastID);
  });
});

exports.deleteItem = (id) => new Promise((resolve, reject) => {
  db.run("DELETE FROM itens WHERE id = ?", [id], err => err ? reject(err) : resolve());
});