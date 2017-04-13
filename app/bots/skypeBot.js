'use strict'

var builder = require(rootDir + '/skype_sdk/core/');

var skypeBot = module.exports = function() {
	this.connector = new builder.ChatConnector({
	    appId: process.env.APP_ID,
	    appPassword: process.env.APP_PASSWORD
	});
	this.bot = new builder.UniversalBot(this.connector);
}


skypeBot.prototype.setBotEvent = function() {
	this.bot.on('receive', function(event) {
		console.log(event);
	    if(event.type==='message') {
	    	var reply = new builder.Message().address(event.address).text('朕知道你說 %s 了', event.sourceEvent.text);
	    	this.send(reply);
	    }
	});

	this.bot.on('contactRelationUpdate', function (message) {
		if (message.action === 'add') {
			var name = message.user ? message.user.name : null;
	        var reply = new builder.Message()
	               .address(message.address)
	               .text("%s, 謝謝你加入我", name || 'there');
		}
	});

	//沒加這行會報錯, Dialog[*:/] not found
	this.bot.dialog('/',[]);
}


skypeBot.prototype.startListen = function() {
	// this.createConnector();
	// this.createBot();
	this.setBotEvent();
}

skypeBot.prototype.getConnector = function() {
	return this.connector;
}

skypeBot.prototype.getBot = function() {
	return this.bot;
}

module.exports = new skypeBot();