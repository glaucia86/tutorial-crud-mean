// @ts-nocheck
/**
 * Arquivo: routes/funcionarioRoute.js
 * Descrição: arquivo responsável pelas rotas da api relacionado ao Funcionário.
 * Data: 23/06/2019
 * Author: Glaucia Lemos
 */

// ==> Aqui que vai conter as rotas do HTTP da api - funcionário

const router = require('express-promise-router')();
const funcionarioController = require('../controllers/funcionario.controller');

// ==> Definindo as rotas do CRUD - Funcionario:

// ==> Rota responsável por criar um novo Funcionário: (POST): localhost:8000/api/funcionarios
router.post('/funcionarios', funcionarioController.create);

// ==> Rota responsável por selecionar todos os Funcionarios: (GET): localhost:8000/api/funcionarios/
router.get('/funcionarios', funcionarioController.findAll);

// ==> Rota responsável por selecionar 'Funcionario' pelo 'Id': (GET): localhost:8000/api/funcionarios/:id
router.get('/funcionarios/:id', funcionarioController.findById);

// ==> Rota responsável por atualizar 'Funcionario' pelo 'Id': (PUT): localhost: 8000/api/funcionarios/:id
router.put('/funcionarios/:id', funcionarioController.update);

// ==> Rota responsável por excluir 'Funcionário' pelo 'Id': (DELETE): localhost:8000/api/funcionarios/:id
router.delete('/funcionarios/:id', funcionarioController.delete);

module.exports = router;
