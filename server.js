var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));

var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

var port = process.env.PORT || 8251;
app.listen(port);


