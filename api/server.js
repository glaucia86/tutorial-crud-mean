/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração da aplicação (Back-End)
 * Data: 09/06/2019
 * Author: Glaucia Lemos
 */

// ==> Exemplo usando o SOLID

const app = require('./src/app');

const port = process.env.PORT || 8000;

app.listen(port);
console.log('Aplicação executando na porta', port);
