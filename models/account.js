var mongoose = require('mongoose');

module.exports = function() {
	var schema = mongoose.Schema({
		username: {
			type: String
		},
		password: {
			type: String
		},
	});

	return mongoose.model('account', schema);
};