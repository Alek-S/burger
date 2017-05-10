'use strict';
const Sequelize = require('sequelize');
const chalk = require('chalk');

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

//check if connected;
connection.authenticate()
	.then( () => {
		console.log(chalk.green('Sequelize DB connection has been established successfully.'));
	})
	.catch( (err) => {
		console.log(chalk.red('Sequelize unable to connect to the database:', err));
	});

module.exports = connection;