// do not make changes to this file
const knex = require('knex');
const { NODE_ENV } = require('../config/index.js');
const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig[NODE_ENV]);