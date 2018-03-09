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

    console.log("idd getImageById",id);

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
    }

    res.sendFile(id,{"root":`./${dataset}`});
};
