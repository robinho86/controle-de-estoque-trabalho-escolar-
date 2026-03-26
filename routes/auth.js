const express = require('express');
const router = express.Router();
const authController = require('../src/controllers/authController');



function midlewarelogin(req, res, next) {
    console.log('Usuario tentando fazer login');
    next();
}

function midlewaresair(req, res, next) {
    console.log('o usuario saiu do sistema');
  next();
}

router.get('/', authController.formLogin);
router.post('/', midlewarelogin, authController.login);
router.get('/logout',midlewaresair, authController.logout);

module.exports = router;