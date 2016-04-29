module.exports = function(homeDir){
    var ctrlr = {};

    ctrlr.getHome = function(req, res, next){
        res.sendfile(homeDir + "/app/views/home.html");
    };

    return ctrlr;
}
