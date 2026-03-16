const express = require('express');
const path = require('path');
const session = require('express-session');
const db = require('./models/db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Sessão
app.use(session({
  secret: 'segredo-estoque',
  resave: false,
  saveUninitialized: true
}));

// Rotas
app.use('/login', require('./routes/auth'));
app.use('/cadastro', require('./routes/cadastro'));
app.use('/estoque', require('./routes/estoque'));
app.use('/fornecedores', require('./routes/fornecedores'));

app.get('/paginaInicial', async (req, res) => {
  const itens = await db.getItens();
  const ultimasRetiradas = itens.slice(-5); // últimas 5 retiradas
  res.render('paginaInicial', { usuario: req.session.usuario, ultimasRetiradas });
});

app.get('/perfil', (req, res) => {
  res.render('perfil', { usuario: req.session.usuario });
});

app.get('/sair', (req, res) => {
  req.session.destroy();
  res.render('sair');
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));