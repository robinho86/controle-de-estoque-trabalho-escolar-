const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

router.get('/', cadastroController.formCadastro);
router.post('/', cadastroController.cadastrar);

module.exports = router;