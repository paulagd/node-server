
/**
* @api {get} /getImageById/:id?dataset={}  getImageById
* @apiName getImageById
* @apiGroup API
* @apiDescription Returns the image file given their id and the dataset where it is allocated.
*
*
* @apiParam {String} id Id of the query.
* @apiParam {String} dataset Dataset where the image is allocated.
*
* @apiSuccess {file} file Contains the file associated to the `id` image.
*
*
* @apiExample {url} Request
*
*        http://localhost:5000/getImageById/oxford_000709.jpg?dataset=oxford
*
*/
exports.getImageById = function (req, res, next) {

    let {id} = req.params;
    let {dataset} = req.query;

    let check_instre = id;

    // GET THE ID WITHOUT EXTENSION IN ORDER TO CHECK IF THERE IS A NUMBER (INSTRE)
    if(id.indexOf(".jpg")!=-1){
      check_instre = id.replace(".jpg","")
    }

    // CHECK IF THE ID IS FROM INSTRE (NUMBER)
    if(parseInt(check_instre)){
      let imlist = require(`../qimLists/imlist_${dataset}.json`);

      for(var i = 0; i < imlist.length; i++){
        if(imlist[i].id == check_instre){
          id = imlist[i].image;
        }
      }
    } else {
      id = (id.indexOf(".jpg")!=-1)? id : (id + '.jpg');
    }

    res.sendFile(id,{"root":`./${dataset}`});
};
