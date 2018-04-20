const bahia = require('../mockbahia')


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bahia').del()
    .then(function () {
      // Inserts seed entries
      return knex('bahia').insert(bahia);
    });
};
