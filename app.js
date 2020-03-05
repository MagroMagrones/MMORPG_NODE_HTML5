require('./config/mongoConnection.js')();
require('./config/database.js')();

var http = require('http');  
var app = require('./config/express')();

http.createServer(app)
	.listen(app.get('port'), function() {		
		console.log('Robos: IN');
		console.log('Express: Port ' + app.get('port'));
});

module.exports = app;