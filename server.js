'use strict';

//==MODULES
const express = require('express');
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// ==Express Setup==
const app = express();
app.set('port', (process.env.PORT || 5000));

//===Static Files, CSS,Images,Fonts===
app.use(express.static('app/public'));


//===Routes===



//==Start Server==
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});