'use strict';

const express = require('express');
const Burger = require('../models/burger');


module.exports = function(app) {

	app.get('/api/all', (req, res) => {
		Burger.findAll({
			attributes: ['id', 'burgerName', 'devoured']
		}).then( (result)=> {
			return res.json(result);
		}
		);
	});

	app.post('/api/new', (req, res) => {
		//blah
	});

	app.put('/api/update/:id', (req, res) => {
		//blah
	});


};