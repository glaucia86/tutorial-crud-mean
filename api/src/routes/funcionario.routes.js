/**
 * Arquivo: routes/funcionarioRoute.js
 * Descrição: arquivo responsável pelas rotas da api relacionado ao Funcionário.
 * Data: 23/06/2019
 * Author: Glaucia Lemos
 */

// ==> Aqui que vai conter as rotas do HTTP da api - funcionário

const express = require('express');

const router = express.Router();
const funcionarioController = require('../controllers/funcionario.controller');

// ==> Definindo as rotas do CRUD - Funcionario:

// ==> Rota responsável por criar um novo Funcionário: (POST): localhost:8000/funcionario/create)
router.post('/create', funcionarioController.create);

// ==> Rota responsável por selecionar todos os Funcionarios: (GET): localhost:8000/funcionario/findAll
router.get('/findAll', funcionarioController.findAll);

module.exports = router;
