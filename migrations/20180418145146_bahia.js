
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bahia', (table) => {
    table.increments();
    table.text('cidade');
    table.text('atleta');
    table.text('bairro');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bahia');
};
