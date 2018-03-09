const zerorpc = require("zerorpc");


exports.getQimListDataset = function (req, res, next) {
    let {dataset} = req.body;
    let qimList = require(`../qimLists/qimList_${dataset}.json`);
    res.send(qimList);
};

exports.getIimlist = function (req, res, next) {
    let {dataset} = req.body;
    dataset = 'instre';
    let imList = require(`../qimLists/imlist_${dataset}.json`);
    res.send(imList);
};

// exports.getIdFromPath = function (req, res, next) {
//
//     let {path, dataset} = req.body;
//
// // IDEA:  It is looked up into the list of ALl the queries. So in IMLIST
// // IDEA: VERY IMPORTANT TO LOOK FOR THE MAPPING ID-PATH IN IMLIST AND NOT QIMLIST
//
//     let imlist = require(`../qimLists/imlist_${dataset}.json`);
//
//     for(var i = 0; i < imlist.length; i++){
//       if(imlist[i].image == path){
//         res.json({id:imlist[i].id});
//       }
//     }
// };

// exports.getPathfromId = function (req, res, next) {
//     let {id} = req.params;
//
//     let {dataset} = req.body;
//
//     // IDEA: VERY IMPORTANT TO LOOK FOR THE MAPPING ID-PATH IN IMLIST AND NOT QIMLIST
//     let imlist = require(`../qimLists/imlist_${dataset}.json`);
//
//     for(var i = 0; i < imlist.length; i++){
//       if(imlist[i].id == id){
//         res.json({path:imlist[i].image});
//       }
//     }
// };



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
