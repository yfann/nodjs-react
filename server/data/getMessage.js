//var data = [{"a":"Hello React", "b":"Hello React"}, {"a":"Hello React", "b":"Hello React"}]
/*
var MessageList = [

{ "Message":data},

];

exports.getMessageList = function (callback) {
	callback(MessageList);
};
*/
var MessageList = [

	{ "Message":"Hello React"},
	
	{ "Message":"Hello Webpack"},
	
	{ "Message":"Hello Nodejs"},
	
	{ "Message":"Hello Express"}
	
	];
	
	exports.getMessageList = function (callback) {
		callback(MessageList);
	};