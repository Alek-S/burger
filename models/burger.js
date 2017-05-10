'use strict';
const Sequelize = require('sequelize');
const connection = require('../config/connection');

let Burger = connection.define('burgers', {
	burgerName: Sequelize.STRING,
	devoured: Sequelize.BOOLEAN,
});

Burger.sync();

module.exports = Burger;