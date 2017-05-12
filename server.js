'use strict';


//==MODULES==
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');



//==Express Setup==
const app = express();
app.set('port', (process.env.PORT || 5000));


//===Parsing===
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


//===Static Files, CSS,Images,Fonts===
app.use(express.static('./public'));


//===Express-Handlebars===
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//===Routes===
require('./controllers/burgers_controller.js')(app);


//==Start Server==
app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});