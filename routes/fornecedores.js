const express = require('express');
const router = express.Router();
const fornecedoresController = require('../src/controllers/fornecedoresController');

// Listar fornecedores
router.get('/', fornecedoresController.listar);

// Adicionar fornecedor
router.post('/add', fornecedoresController.adicionar);

// Remover fornecedor
router.post('/delete/:id', fornecedoresController.remover);

// Formulário de edição
router.get('/edit/:id', fornecedoresController.formEditar);

// Salvar edição
router.post('/edit/:id', fornecedoresController.editar);

module.exports = router;