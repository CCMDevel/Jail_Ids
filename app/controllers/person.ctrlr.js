module.exports = function(){
    var Person = require('mongoose').model('Person');

    var isEmpty = require('./isEmpty.js');
    var reqError = require('./reqError.js');

    var ctrlr = {};

    // Creates - - - - - - - - - - 
    ctrlr.create = function(req, res){
        if (!req.body) return reqError(res, 400, "body", "missing");

        var newPerson = new Person(req.body);
        newPerson.save(function(err, doc){
            if (err) return reqError(res, 500, err);

            res.status(201).json(newPerson);
        });
    };

    var ID_LENGTH = 7;
    var pad = function(num, size){
        var str = num + "";
        while (str.length < size){
            str = "0" + str;
        }
        return str;
    };

    ctrlr.generateNewId = function(req, res, next){
        if (!req.body) return reqError(res, 400, "body", "missing");
        
        var hasMiddle = true;
        if (!req.body.name_first) return reqError(res, 400, "name_first", "missing");
        if (!req.body.name_last) return reqError(res, 400, "name_last", "missing");
        if (!req.body.name_middle) return reqError(res, 400, "name_middle", "missing");

        if (isEmpty(req.body)) return reqError(res, 400, "body", "empty");
        
        var val = Math.round(Math.random() * Math.pow(10, ID_LENGTH));
        var id = req.body.name_first.charAt(0).toUpperCase();
        id += req.body.name_middle.charAt(0).toUpperCase();    
        id += req.body.name_last.charAt(0).toUpperCase() + "-";
        valStr = pad(val, ID_LENGTH);
        id += valStr.substring(0, ID_LENGTH / 2) + "-";
        id += valStr.substring(ID_LENGTH / 2);
        
        console.log(id + "\n");

        res.send(id);
    };

    // Reads - - - - - - - - - - - - -
    ctrlr.getIndex = function(req, res, next){
        Person.find({}, function(err, ids){
            if (err) return reqError(res, 500, err);

            res.json(ids);
        });
    };

    ctrlr.query = function(req, res, next){
        var query = {};
        if (req.query.name_first)
            query.name_first = req.query.name_first;
        
        if (req.query.name_last)
            query.name_last = req.query.name_last;
    
        if (req.query.name_middle)
            query.name_middle = req.query.name_middle;

        Person.find(query, function(err, ids){
            if (err) return reqError(res, 500, err);

            res.json(ids);
        });
    };

    // query by meta _id, defined by req.params.person__id
    ctrlr.getById = function(req, res, next){
        if (!req.params.person__id)
            return reqError(res, 400, "person__id param", "missing");

        Person.findOne({
            _id : req.params.person__id
        }, function(err, idDoc){
            if (err) return reqError(res, 500, err);

            res.json(idDoc);
        });
    };

    // delete by meta _id, defined by req.params.person__id
    ctrlr.deleteById = function(req, res, next){
        if (!req.params.person__id) 
            return reqError(res, 400, "person__id param", "missing");

        Person.remove({
            _id : req.params.person__id
        }, function(err){
            if (err) return reqError(res, 500, err);

            res.status(204).send("");
        });
    };

    return ctrlr;    
}
