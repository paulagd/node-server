var jsonfile = require('jsonfile');

exports.getRankinById = function (req, res, next) {
    res.sendFile(req.params.id,{"root":'./rankins'});
};

exports.writeRankinById = function (req, res, next) {
    var id = req.params.id;
    var body = req.body;
    // console.log("******** IDEE", id);

    // console.log("******** ARCHIVO ",body);

    var write_this = body;
    var file_to_write_in = './rankins/'+ id ;

    //si no existe el file_to_write_in lo crea. Si existe le añade lo que pongamos.Sin el flag a lo REESCRIBE
    jsonfile.writeFile(file_to_write_in, write_this, {flag: 'a'}, function (err) {  //flag a is to write in an existing file
        if(err)
        next(err);

        res.end();
    })

    // res.sendFile(req.params.id,{"root":'./ranks_best_oxford'});
};
