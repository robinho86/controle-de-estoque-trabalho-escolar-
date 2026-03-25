const express = require('express');
const router = express.Router();
const estoqueController = require('../src/controllers/estoqueController');

function midlewareestoque(req, res, next) {
    console.log('Acessando rota de estoque');
    next();
}

// Listar itens do estoque
router.get('/', midlewareestoque, estoqueController.listar);



function midlewareestoqueadd(req, res, next) {
    console.log('Adicionando item ao estoque');
    next();
}
// Adicionar item
router.post('/add', midlewareestoqueadd, estoqueController.adicionar);

// Remover item
router.post('/delete/:id', estoqueController.remover);

// Formulário de edição
router.get('/edit/:id', estoqueController.formEditar);

// Salvar edição
router.post('/edit/:id', estoqueController.editar);

module.exports = router;