var mongoose = require('mongoose');

module.exports = function(){
    var db = mongoose.connect('mongodb://localhost/jail_ids_dev');

    var modelsDir = '../app/models/';

    require(modelsDir + 'person.model.js');

    return db;    
};
