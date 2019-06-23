/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings da aplicação: MongoDb.
 * Data: 23/06/2019
 * Author: Glaucia Lemos
 */

module.exports = {
  local:
  {
    localUrl: 'mongodb://localhost:27017/meantutorialcrud',
  },
};

/**
 * Connection String ==> CosmosDb
 * module.exports = {
  cosmosdb:
  {
    name: 'mean-tutorialmean-crud',
    url: '<incluir-a-connection-string-do-cosmodb>',
    port: 10255,
  },
};
 */
