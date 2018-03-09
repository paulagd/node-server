const zerorpc = require("zerorpc");
//allow to get a rankin of an image from the client side
exports.getRankinById = function (req, res, next) {
    let id = req.params.id;  //id = aaa.json  --> si no ve amb .json al final es una url
    let { dataset, url, encoded_image, path } = req.body;

    // IN PYTHON SERVER CHECK IF THERE IS ID OR JUST 'unknown_id'
    if(id.indexOf("unknown_id")==0)
      id = id.replace(/.json$/,"");

    // if(typeof(id)=="number"){ //if there is no '.jpg'
    //   let imlist = require(`../qimLists/imlist_${dataset}.json`);
    //
    //   for(var i = 0; i < imlist.length; i++){
    //     if(imlist[i].id == id){
    //       path = imlist[i].image;
    //
    //       console.log("IIDDD INSTRE PERO DEBERIA SER .JSON?",path);
    //       console.log("-----------",id);
    //       console.log("-----------");
    //       console.log("-----------");
    //       // TODO... posar id = unknown_id???
    //     }
    //   }
    // }

    getSingleRankin(id, url, encoded_image, dataset, path, function(data){
        res.json(data);
    });
};

getSingleRankin = function(id, url, encoded_image, dataset, path, callback){

    let client = new zerorpc.Client({heartbeatInterval: 100000});
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
