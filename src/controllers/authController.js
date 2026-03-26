const db = require('../database/database');

exports.formLogin = (req, res) => {
  res.render('login');
};

// controller para processar o login
exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const usuario = await db.getUsuarioByEmail(email);
  if (usuario && usuario.senha === senha) {
    req.session.usuario = usuario; 
    res.redirect('/paginaInicial');
  } else {
    res.send("Login inválido");
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/paginaInicial');
};