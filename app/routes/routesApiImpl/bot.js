'use strict';
var builder = require(rootDir + '/skype_sdk/core/');

/**
 * 主動push訊息給user
 * 
 *
 */

exports.pushMessage = function(req, res) { 
	var to = {  id: '1491981088793',
	            channelId: 'skype',
	            user: { id: '${user_id}',name: 'test' },
	            conversation: { id: '${user_id}' },
	            serviceUrl: 'https://smba.trafficmanager.net/apis/',
	            useAuth: true
	          };
	var reply = new builder.Message()
	                        .address(to)
	                        .text("hello");
	skypeBot.getBot().send(reply);
	res.end();
}
