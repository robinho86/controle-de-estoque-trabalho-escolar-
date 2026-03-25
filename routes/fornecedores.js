const express = require('express');
const router = express.Router();
const fornecedoresController = require('../src/controllers/fornecedoresController');



function midlewarefornecedores(req, res, next) {
    console.log('Acessando rota de fornecedores');
    next();
}
// Listar fornecedores
router.get('/', midlewarefornecedores, fornecedoresController.listar);

// Adicionar fornecedor
router.post('/add', fornecedoresController.adicionar);

// Remover fornecedor
router.post('/delete/:id', fornecedoresController.remover);

// Formulário de edição
router.get('/edit/:id', fornecedoresController.formEditar);

// Salvar edição
router.post('/edit/:id', fornecedoresController.editar);

module.exports = router;