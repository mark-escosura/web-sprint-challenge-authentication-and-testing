
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Mark', password: 1234},
        {id: 2, username: 'Bobby', password: 1234},
        {id: 3, username: 'Hughes', password: 1234},
        {id: 4, username: 'Felipe', password: 1234},
        {id: 5, username: 'Mary', password: 1234}
      ]);
    });
};
