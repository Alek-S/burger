'use strict';

const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize
let connection = new Sequelize('burgers_db','root','', {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

module.exports = connection;