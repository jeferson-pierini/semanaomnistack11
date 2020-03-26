
exports.up = function(knex) {
    return knex.schema.createTable('incidencias', function(table){
        /**criando campo de autoincremento*/
        table.increments();

        table.string('titulo').notNullable();
        table.string('descricao').notNullable();
        table.decimal('valor').notNullable();
        
        /**relacionamento das tabelas */
        table.string('ongs_id').notNullable();

        table.foreign('ongs_id').references('id').inTable('ongs');
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidencias');
  
};
