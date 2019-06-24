/**
 * Arquivo: routes/funcionarioRoute.js
 * Descrição: arquivo responsáveç pelas rotas da api relacionado ao Funcionário.
 * Data: 23/06/2019
 * Author: Glaucia Lemos
 */

// ==> Aqui que vai conter as rotas do HTTP da api - funcionário

const express = require('express');

const router = express.Router();
// const controller = require('../controllers/funcionarioController');

// ==> Definindo as rotas do CRUD - Funcionario:

// router.get('/', controller.get); // Selecionar todos os Funcionarios: (GET) localhost:8000/api/
// router.get('/:id', controller.getById); // Selecionar Funcionario por Id (GET) localhost:8000/api/:id
// router.post('/', controller.post); // Criar Funcionario (POST) localhost:8000/api/
// router.put('/:id', controller.put); // Atualizar Funcionario pelo Id (PUT) localhost:8000/api/:id
// router.delete('/:id', controller.delete); // Excluir Funcionário pelo Id (DELETE) localhost:8000/api/:id

module.exports = router;
