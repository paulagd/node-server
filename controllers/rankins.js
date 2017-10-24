const zerorpc = require("zerorpc");
//allow to get a rankin of an image from the client side
exports.getRankinById = function (req, res, next) {
    let id = req.params.id;  //id = aaa.json  --> si no ve amb .json al final es una url
    let { dataset, url, encoded_image, path } = req.body;

    getSingleRankin(id, url, encoded_image, dataset, path, function(data){
        res.json(data);
    });
};

getSingleRankin = function(id, url, encoded_image, dataset, path, callback){

    let client = new zerorpc.Client();
    client.connect("tcp://136.206.26.127:4243");
    client.invoke("postServer", id, url, encoded_image, dataset, path, function(error, res, more) {
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
