var jail_ids_routes = require('./jail_ids.routes.js');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(publicDir){
    console.log("Starting jail_ids.js...");

    var app = express();
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({
        extended : true
    }));
    app.use(bodyParser.json());

    jail_ids_routes(app, publicDir);
    return app;
};
