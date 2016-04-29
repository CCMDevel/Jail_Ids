var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    id : {
        type : String, 
        required : true
    },
    name_first : {
        type : String, 
        required : true
    },
    name_last : {
        type : String, 
        required : true
    },
    name_middle : {
        type : String, 
        required : true
    }
});

mongoose.model('Person', PersonSchema);
