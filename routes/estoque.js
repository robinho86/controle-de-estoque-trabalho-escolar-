const express = require('express');
const router = express.Router();
const estoqueController = require('../src/controllers/estoqueController');

// Listar itens do estoque
router.get('/', estoqueController.listar);

// Adicionar item
router.post('/add', estoqueController.adicionar);

// Remover item
router.post('/delete/:id', estoqueController.remover);

module.exports = router;