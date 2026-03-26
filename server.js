const express = require('express');
const path = require('path');
const session = require('express-session');
const db = require('./src/database/database');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));



app.use(session({
  secret: 'segredo-estoque',
  resave: false,
  saveUninitialized: true
}));

// Rotas, o que digitar na barra de endereço, o que vai ser renderizado
app.use('/login', require('./routes/auth'));
app.use('/cadastro', require('./routes/cadastro'));
app.use('/estoque', require('./routes/estoque'));
app.use('/fornecedores', require('./routes/fornecedores'));


// Página inicial e perfil, o que vai ser renderizado quando acessar a página inicial ou o perfil do usuário
app.get('/paginaInicial', async (req, res) => {
  const itens = await db.getItens();
  const ultimasRetiradas = itens.slice(-10); 
  res.render('paginaInicial', { usuario: req.session.usuario, ultimasRetiradas });
});



// o endereço direto tambem direciona para a página inicial, para evitar que o usuário acesse a página inicial sem estar logado
app.get('/', async (req, res) => {
  const itens = await db.getItens();
  const ultimasRetiradas = itens.slice(-10); 
  res.render('paginaInicial', { usuario: req.session.usuario, ultimasRetiradas });
});

app.get('/perfil', (req, res) => {
  res.render('perfil', { usuario: req.session.usuario });
});

app.get('/sair', (req, res, next) => {
  req.session.destroy();
  res.render('sair');
});

function midlewaresair(req, res, next) {
    console.log('o usuario saiu do sistema');
  next();
}


app.use((req, res, next) => {
  res.status(404).render('404.ejs');
});



app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));