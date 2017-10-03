const zerorpc = require("zerorpc");

exports.getRankinById = function (req, res, next) {
    let id = req.params.id;  //id = aaa.json

    getSingleRankin(id, function(data){
        res.json(data);
    });
};

getSingleRankin = function(id, callback){

    let client = new zerorpc.Client();
    client.connect("tcp://127.0.0.1:4242");
    client.invoke("postServer", id, function(error, res, more) {
        if(error) {
            console.log("ERROR IN CALLBACK");
            callback(error);
        }

        if(!more) {
            console.log("CALLBACK DONE");
            callback(res);
        }
    })
};
