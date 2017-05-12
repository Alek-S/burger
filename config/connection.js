'use strict';
const Sequelize = require('sequelize');
const chalk = require('chalk');
let connection = undefined;

// Creates Postgres(Heroku) mySQL(Local) connection using Sequelize
if(process.env.DATABASE_URL){
	connection = new Sequelize(process.env.DATABASE_URL, {
		dialect:  'postgres',
    	protocol: 'postgres',
    	port:     5432,
    	host:     'ec2-174-129-223-193.compute-1.amazonaws.com',
    	logging:  true, //false
    	pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	});
}else{
	connection = new Sequelize('burgers_db','root','', {
		host: 'localhost',
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	});
}

//check if connected;
connection.authenticate()
	.then( () => {
		console.log(chalk.green('Sequelize DB connection has been established successfully.'));
	})
	.catch( (err) => {
		console.log(chalk.red('Sequelize unable to connect to the database:', err));
	});

module.exports = connection;
