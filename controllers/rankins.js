const zerorpc = require("zerorpc");
//allow to get a rankin of an image from the client side
exports.getRankinById = function (req, res, next) {
    let id = req.params.id;  //id = aaa.json  --> si no ve amb .json al final es una url
    let { dataset, url, encoded_image, path } = req.body;

    getSingleRankin(id, url, encoded_image, dataset, path, function(data){
        res.json(data);
    });

    // let data_mocked = (
    //   [{Image: 'all_souls_000000',IdSequence:1},
    //   {Image: 'all_souls_000001',IdSequence:2},
    //   {Image: 'all_souls_000002',IdSequence:3},
    //   {Image: 'all_souls_000003',IdSequence:4},
    //   {Image: 'all_souls_000005',IdSequence:5}]
    // );
    //
    // console.log(data_mocked);
    // res.json(data_mocked);
};

getSingleRankin = function(id, url, encoded_image, dataset, path, callback){

    let client = new zerorpc.Client();
    client.connect("tcp://localhost:4243");
    client.invoke("postServer", id, url, encoded_image, dataset, path, function(error, res, more) {
        if(error) {
            console.log("ERROR IN CALLBACK", error);
            callback(error);
        }

        if(!more) {
            console.log("CALLBACK DONE");
            callback(res);
        }
    })
};
