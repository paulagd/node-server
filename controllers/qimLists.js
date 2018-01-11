const zerorpc = require("zerorpc");

exports.getQimListOxford = function (req, res, next) {
    let qimList = require(`../qimLists/qimList_oxford.json`);
    res.send(qimList);
};

exports.getQimListParis = function (req, res, next) {
    let qimList = require(`../qimLists/qimList_paris.json`);
    res.send(qimList);
};
exports.getQimListInstre = function (req, res, next) {
    let qimList = require(`../qimLists/qimList_instre.json`);
    //maybe send less imgs??
    res.send(qimList);
};


//IDEA: ask to python server

// getQimList(dataset, function(data){
//     res.json(data);
// });
getQimList = function(id, url, encoded_image, dataset, callback){

    let client = new zerorpc.Client();
    client.connect("tcp://localhost:4243");
    client.invoke("postQimList", dataset, function(error, res, more) {
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
