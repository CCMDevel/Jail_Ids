module.exports = function(app, homeDir){
    console.log('    initializing routes...');

    if (homeDir){
        app.use(require('express').static(homeDir + "/public"));
        console.log('        /public directory initialized.'); 
    }

    var routesDir = '../app/routes/';

    require(routesDir + 'web_app.routes.js')(app, homeDir);

    console.log('    routes initialized.');
};
