const zerorpc = require("zerorpc");

/**
* @api {post} /getRankinById/:id  getRankinById
* @apiName getRankinById
* @apiGroup API
* @apiDescription Provides the rankin of an image from the client side.
*
*
* @apiParam {String} id Id of the query
* @apiParam {String} [url] Url of the image introduced to the system.
* @apiParam {String} [encoded_image] Encoded image uploaded to the system.
* @apiParam {String} dataset Dataset given
* @apiParam {String} [path] Path given in the case of 'complicated' datasets as 'instre'.
*
* @apiSuccess {file} file Contains the file associated to the `id` image.
*
*
* @apiExample {json} Request
*
*        {
*          "dataset": "paris",
*          "url": null,
*          "encoded_image": null,
*          "path": null
*        }
*
* @apiExample {json} Success 200
* [
*  {
*        "IdSequence": "0",
*        "Image": "paris_general_002391"
*    },
*    {
*        "IdSequence": "1",
*        "Image": "paris_general_001620"
*    },
*
*    ...
*
*    {
*        "IdSequence": "5011",
*        "Image": "paris_pompidou_000446"
*    }
* ]
*
*/

exports.getRankinById = function (req, res, next) {
    let id = req.params.id;  //id = aaa.json  --> si no ve amb .json al final es una url
    let { dataset, url, encoded_image, path } = req.body;

    // IN PYTHON SERVER CHECK IF THERE IS ID OR JUST 'unknown_id'
    if(id.indexOf("unknown_id")==0)
      id = id.replace(/.json$/,"");

    getSingleRankin(id, url, encoded_image, dataset, path, function(err,data){
        if(err){
          let messageError = (err.stack.indexOf("ValueError")!= -1) ? (err.stack.split(":")[2].split('\n')[0]) :
                  "Error in python server. Check the log of the nodejs server console command for more information.";

          res.status(500).send({messageError});
        } else {
          data = data.map((obj)=>{
            let newJson = obj;
            newJson.Image = obj.Image.toString();
            return newJson;
          });
          res.json(data);
        }
    });
};

getSingleRankin = function(id, url, encoded_image, dataset, path, callback){

    let client = new zerorpc.Client({heartbeatInterval: 100000});
    client.connect("tcp://localhost:4243");
    client.invoke("postServer", id, url, encoded_image, dataset, path, function(error, res, more) {

        if(error) {
            console.log("ERROR IN CALLBACK", error);
            callback(new Error(error), null);
        }
        else if(!more) {
            console.log("CALLBACK DONE");
            callback(null,res);
        }
    })
};
