/**Importar as configurações do Knex */

const Knex = require('knex');
const configuration = require('../../knexfile');

/**Conexão de desenvolvedor */
const connection = Knex(configuration.development);

module.exports = connection;
