module.exports = function(app){
    var person_ctrlr = require('../controllers/person.ctrlr.js')();

    // save a new id
    app.post('/person/', person_ctrlr.create);
    
    // generate a new person
    app.post('/person/id', person_ctrlr.generateNewId);
    
    // see if existing person exists
    app.get('/person', person_ctrlr.query);

    // see all persons
    app.get('/person/index', person_ctrlr.getIndex);

    // get person by meta _id
    app.get('/person/_id/:person__id', person_ctrlr.getById);
    
    // delete a person by meta _id
    app.delete('/person/_id/:person__id', person_ctrlr.deleteById);

    
    console.log("        person routes initialized.");
}

