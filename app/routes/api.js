'use strict';

var express = require('express');
var router  = express.Router();

var routerImplPath  = './routesApiImpl';
var bot = require(routerImplPath + '/bot');
console.log(skypeBot.getConnector());
router.post('/message', skypeBot.getConnector().listen());
router.get('/pushMessage', bot.pushMessage);

module.exports = router;

