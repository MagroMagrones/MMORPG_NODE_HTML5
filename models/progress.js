var mongoose = require('mongoose');

module.exports = function() {
	var schema = mongoose.Schema({
		username: {
			type: String
		},
		level: {
			type: String
        },
        questComplete: {
			type: String
		},
	});
	return mongoose.model('progress', schema);
};