var port = 3010;
var app = require('./config/jail_ids.express.js');
var db = require('./config/jail_ids.mongoose.js');

db = db();
app = app(__dirname + "/public");

app.set('port', port);
app.listen(app.get('port'), function(){
    console.log('jail_ids.js now listening on port ' + app.get('port'));
});