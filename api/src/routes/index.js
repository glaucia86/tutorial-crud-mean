/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada da Api 'Funcionário' da aplicação.
 * Data: 09/06/2019
 * Author: Glaucia Lemos
 */

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Tutorial Mean',
    version: '1.0.0',
  });
});

module.exports = router;
