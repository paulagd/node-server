//allow to get an image from the client side

// exports.getImageOxfordById = function (req, res, next) {
//     res.sendFile(req.params.id,{"root":'./oxbuild_images'});
// };
// exports.getImageParisById = function (req, res, next) {
//
//     res.sendFile(req.params.id,{"root":'./paris'});
// };
// exports.getImageInstreById = function (req, res, next) {
//     res.sendFile(req.query.path,{"root":'./instre'});
// };

// TODO: make a general form
exports.getImageById = function (req, res, next) {

    let {id} = req.params;
    let {dataset} = req.query;

    if(id.indexOf('.')== -1){ //if there is no '.jpg'
      let imlist = require(`../qimLists/imlist_${dataset}.json`);

      for(var i = 0; i < imlist.length; i++){
        if(imlist[i].id == id){
          id = imlist[i].image;
        }
      }
    }

    res.sendFile(id,{"root":`./${dataset}`});
};
