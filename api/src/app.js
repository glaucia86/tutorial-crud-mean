/**
 * Arquivo: src/app.js
 * Descrição: arquivo responsável por toda a configuração da aplicação (Back-End)
 * Data: 09/06/2019
 * Author: Glaucia Lemos
 */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Importar o arquivo: 'database.js'
const localDatabase = require('./config/database'); // ==> persistencia de maneira local: MongoDb
// const databaseCosmosDb = require('./config/databaseCosmosDb'); // ==> persistencia de maneira nuvem: CosmosDb

mongoose.Promise = global.Promise;

// ==> Conexão com a Base de Dados:
mongoose.connect(localDatabase.local.localUrl, { useNewUrlParser: true }).then(() => {
  console.log('A Base de dados foi conectada com sucesso!');
}, (err) => {
  console.log(`Erro ao conectar com a base de Dados...: ${err}`);
  process.exit();
});

// ==> Rotas
const funcionarioRoute = require('./routes/funcionario.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));
app.use(cors());

app.use('/api/', funcionarioRoute);

module.exports = app;
