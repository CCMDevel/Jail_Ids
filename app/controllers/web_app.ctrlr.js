module.exports = function(){
    var ctrlr = {};

    ctrlr.getHome = function(req, res, next){
        res.redirect("/home.html");
    };

    return ctrlr;
}
