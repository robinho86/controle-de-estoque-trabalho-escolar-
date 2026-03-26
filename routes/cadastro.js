const express = require('express');
const router = express.Router();
const cadastroController = require('../src/controllers/cadastroController');

function midlewarecadastro(req, res, next) {
    console.log('Adicionando um novo usuário');
    next();
}

router.get('/', midlewarecadastro, cadastroController.formCadastro);
router.post('/', midlewarecadastro, cadastroController.cadastrar);

module.exports = router;