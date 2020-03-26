/** Metodo UP é responsavel pela a Criação das Tabelas e Colunas */
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('cidade').notNullable();
    table.string('uf',2).notNullable();
  });
};
/**Caso precise deletar a tabela desfazer o que foi feito no UP*/
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
