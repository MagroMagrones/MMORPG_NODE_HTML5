var mongoose = require('mongoose');
var configMongodb = require('./mongoConnection');

module.exports = function () {
    mongoose.Promise = global.Promise;
    mongoose.connect(configMongodb.url, {});

    mongoose.connection.on('connected', function() {
        console.log('* * * * * * * * * * * * * * * *');
        console.log('*    MongoDB: Connected       *');
        console.log('* * * * * * * * * * * * * * * *');
    });

    mongoose.connection.on('disconnected', function() {
        console.log('MongoDB: Disconnected');
    });

    mongoose.connection.on('error', function(err) {
        console.log('MongoDB: Error');
        console.log(err);
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function(){
            console.log('MongoDB: OUT');
            process.exit(0);
        });
    });
}