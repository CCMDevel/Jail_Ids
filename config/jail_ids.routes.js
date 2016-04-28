module.exports = function(app, publicDir){
    console.log('    initializing routes...');

    if (publicDir){
        app.use(require('express').static(publicDir));
        console.log('        /public directory initialized.'); 
    }

    var routesDir = '../app/routes/';

    require(routesDir + 'web_app.routes.js')(app);

    console.log('    routes initialized.');
};
