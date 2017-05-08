'use strict';

//==MODULE==
const mysql = require('mysql');

//Connection settings
const connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'cat_db'
});

//Connect
connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// Export connection
module.exports = connection;