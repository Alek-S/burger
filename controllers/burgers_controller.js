'use strict';
const Burger = require('../models/burger');


module.exports = function(app) {

//===HTML ROUTES===
	app.get('/', function (req, res) {
		Burger.findAll().then((data)=>{
			res.render('index', {burgerEntry: data});
		})	
	});


//===API ROUTES===
	app.get('/api/all', (req, res) => {
		Burger.findAll({
			attributes: ['id', 'burgerName', 'devoured']
		}).then( (result)=> {
			return res.json(result);
		}
		);
	});

	//for sanity check testing
	app.get('/api/specific/:id', (req, res) => {
		let burgerID = req.params.id;

		Burger.findAll({
			attributes: ['id', 'burgerName', 'devoured'],
			where: {id: burgerID}
		}).then( (result)=> {
			return res.json(result);
		}
		);
	});

	app.post('/api/new/:name', (req, res) => {
		let newBurger = req.params.name;
		console.log('New Entry', newBurger);

		Burger.create({
			burgerName: newBurger,
			devoured: 'false',
		}).then( (result)=>{
			return res.json(result);
		});

	});

	app.put('/api/update/:id', (req, res) => {
		let burgerID = req.params.id;
		let updatedState = req.body.devoured;

		Burger.update(
			{devoured: updatedState},
			{where: { id: burgerID}}
		).then( (result)=>{
			return res.json(result);
		});
	});


};