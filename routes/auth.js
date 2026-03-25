const express = require('express');
const router = express.Router();
const authController = require('../src/controllers/authController');



function midlewarelogin(req, res, next) {
    console.log('Usuario tentando fazer login');
    next();
}
router.get('/', authController.formLogin);
router.post('/', midlewarelogin, authController.login);
router.get('/logout', authController.logout);

module.exports = router;