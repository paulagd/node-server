const zerorpc = require("zerorpc");

//allow to get a rankin of an image from the client side
exports.getRankinById = function (req, res, next) {
    let id = req.params.id;  //id = aaa.json  --> si no ve amb .json al final es una url
    let { dataset, url } = req.body;

    if(url){
      console.log("si que hay URL ___: ",url);
    }else{
      console.log("no hay URL, ",url);
    }
    getSingleRankin(id, url, dataset, function(data){
        res.json(data);
    });
};

getSingleRankin = function(id, url, dataset, callback){

    let client = new zerorpc.Client();
    client.connect("tcp://136.206.26.127:4242");
    client.invoke("postServer", id, url, dataset, function(error, res, more) {
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
