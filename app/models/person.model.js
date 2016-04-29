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

PersonSchema.index({
    name_first : 1,
    name_middle : 1,
    name_last : 1
});

var nameToUpperCase = function(obj){
    if (obj.name_first) obj.name_first = obj.name_first.toUpperCase();
    if (obj.name_middle) obj.name_middle = obj.name_middle.toUpperCase();
    if (obj.name_last) obj.name_last = obj.name_last.toUpperCase();
};

var logName = function(obj){
    temp = {};
    if (obj.name_first) temp.name_first = obj.name_first;
    if (obj.name_middle) temp.name_middle = obj.name_middle;
    if (obj.name_last) temp.name_last = obj.name_last;
    console.log('    temp = ' + JSON.stringify(temp));   
};

PersonSchema.pre('save', function(next){
    nameToUpperCase(this);
    next();
});

PersonSchema.pre('remove', function(next){
    nameToUpperCase(this);
    next();    
});

PersonSchema.pre('find', function(next){
    nameToUpperCase(this._conditions);
    next();    
});

PersonSchema.pre('findOne', function(next){
    nameToUpperCase(this._conditions);
    next();    
});

mongoose.model('Person', PersonSchema);
