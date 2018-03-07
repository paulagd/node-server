const zerorpc = require("zerorpc");

exports.getIdFromPath = function (req, res, next) {
    // let qimList = require(`../qimLists/qimList_instre.json`);
    // //maybe send less imgs??
    // res.send(qimList);
};

exports.getPathfromId = function (req, res, next) {
    let qimList = require(`../qimLists/qimList_instre.json`);
    //maybe send less imgs??
    res.send(qimList);
};

exports.getQimListDataset = function (req, res, next) {
    let {dataset} = req.body;
    let qimList = require(`../qimLists/qimList_${dataset}.json`);
    res.send(qimList);
};


// //IDEA: ask to python server
// getQimList = function(id, url, encoded_image, dataset, callback){
//
//     let client = new zerorpc.Client();
//     client.connect("tcp://localhost:4243");
//     client.invoke("postQimList", dataset, function(error, res, more) {
//         if(error) {
//             console.log("ERROR IN CALLBACK");
//             callback(error);
//         }
//
//         if(!more) {
//             console.log("CALLBACK DONE");
//             callback(res);
//         }
//     })
// };
