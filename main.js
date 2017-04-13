'use strict';

global.rootDir = __dirname;
global.skypeBot = require('./app/bots/skypeBot');
var express = require('express');
var web_app = express();
var web_server = require('http').createServer(web_app);
var web_port = process.env.PORT || 5001;
var router = require('./app/routes/api');
skypeBot.startListen();

web_server.listen(web_port, function() {
	console.log('Web Server start at port ' + web_port);
});

web_app.use('/api', router);



