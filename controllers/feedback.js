const zerorpc = require("zerorpc");
//allow to get a rankin of an image from the client side
exports.sendFeedback_receiveRanking = function (req, res, next) {
    let id = req.params.id;  //id = aaa.json  --> si no ve amb .json al final es una url
    let { dataset, url, encoded_image, path, similar_list, mode } = req.body;
    //
    // console.log('-------------SERVER-----------');
    // console.log('id',id);
    // console.log('dataset',dataset);
    // console.log('path',path);
    // console.log('similar_list',similar_list);
    // console.log('MODE',mode);
    // console.log('url',url);

    postFeedback(id, url, encoded_image, dataset, path, similar_list, mode, function(data){
        console.log(data);
        res.json(data);
    });
};

postFeedback = function(id, url, encoded_image, dataset, path, similar_list, mode, callback){

    let client = new zerorpc.Client();
    client.connect("tcp://localhost:4243");
    client.invoke("postFeedback_And_Update", id, url, encoded_image, dataset, path, similar_list, mode, function(error, res, more) {
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
