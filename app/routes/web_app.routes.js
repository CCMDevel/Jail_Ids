module.exports = function(app, homeDir){
    var fs = require('fs');
    var web_app_ctrlr = require('../controllers/web_app.ctrlr.js')(homeDir);

    app.get('/', web_app_ctrlr.getHome);

    console.log('        web_app routes initialized.');
}
