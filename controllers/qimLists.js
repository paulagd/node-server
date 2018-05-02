const zerorpc = require("zerorpc");

/**
* @api {post} /getQimListDataset getQimListDataset
* @apiName getQimListDataset
* @apiGroup API
*
* @apiDescription Gets the list of query examples given a dataset.
*
* @apiParam {String} dataset Dataset given
*
* @apiSuccess {string} image Contains the name of the image or path associated.
* @apiSuccess {Number} id Contains the id of the query in QimList. However it is
* just an identifier. It is not the unique id corresponding to the image. The unique
* id can be found in in the 'imlist' call.
*
*
* @apiExample {json} Request
*      {
*          "dataset":"oxford",
*      }
*
* @apiExample {json} Success 200
* [
*  {
*        "image": "oxford_002985.jpg",
*        "id": "0"
*    },
*    {
*        "image": "keble_000028.jpg",
*        "id": "1"
*    },
*
*    ...
*
*    {
*        "image": "christ_church_001020.jpg",
*        "id": "54"
*    }
* ]
*
*
*
*/

exports.getQimListDataset = function (req, res, next) {
    let {dataset} = req.body;
    let qimList = require(`../qimLists/qimList_${dataset}.json`);
    res.send(qimList);
};



/**
* @api {post} /getImlist getImlist
* @apiName getImlist
* @apiGroup API
*
* @apiDescription Gets the list of all the queries in a dataset.
* @apiParam {String} dataset Dataset given
*
** @apiSuccess {string} image Contains the name of the image or path associated.
* @apiSuccess {Number} id Contains the unique id corresponding to the image.
*
* @apiExample {json} Request
*      {
*          "dataset":"oxford",
*      }
*
* @apiExample {json} Success 200
* [
*  {
*        "image": "INSTRE-S1/01a_canada_book/001.jpg",
         "id": 1
*    },
*    {
*        "image": "INSTRE-S1/01a_canada_book/002.jpg",
         "id": 2
*    },
*
*    ...
*
*    {
*        "image": "INSTRE-M/50/107.jpg",
         "id": 28543
*    }
* ]
*
*/
exports.getIimlist = function (req, res, next) {
    let {dataset} = req.body;
    dataset = 'instre';
    let imList = require(`../qimLists/imlist_${dataset}.json`);
    res.send(imList);
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
