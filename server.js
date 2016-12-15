var express 	= require('express');
var bodyParser 	= require('body-parser');
var cors 		= require('cors');

var config = require('./config.js');

var port = 1701;

var app = express();
app.use(bodyParser.json());

var corsOptions = {
	origin: 'http://localhost:' + port
}
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));
//END POINTS


app.listen(port, function() {
  console.log("Started server on port", port);
});