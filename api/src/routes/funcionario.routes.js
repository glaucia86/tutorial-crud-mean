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

// ==> Rota responsável por criar um novo Funcionário: (POST): localhost:8000/api/funcionario
router.post('/funcionario', funcionarioController.create);

// ==> Rota responsável por selecionar todos os Funcionarios: (GET): localhost:8000/api/funcionarios/
router.get('/funcionarios', funcionarioController.findAll);

// ==> Rota responsável por selecionar 'Funcionario' pelo 'Id': (GET): localhost:8000/api/funcionario/:id
router.get('/funcionario/:id', funcionarioController.findById);

// ==> Rota responsável por atualizar 'Funcionario' pelo 'Id': (PUT): localhost: 8000/api/funcionario/:id
router.put('/funcionario/:id', funcionarioController.update);

module.exports = router;
