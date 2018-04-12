
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

    // GET THE ID WITHOUT EXTENSION IN ORDER TO CHECK IF THERE IS A NUMBER (INSTRE)
    if(id.indexOf(".jpg")!=-1){
      id = id.replace(".jpg","")
    }

    id = (id.indexOf(".jpg")!=-1)? id : (id + '.jpg');

    res.sendFile(id,{"root":`./${dataset}`});
};
