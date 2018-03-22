const zerorpc = require("zerorpc");
//allow to get a rankin of an image from the client side

/**
* @api {post} /sendFeedback_receiveRanking/:id sendFeedback_QE
* @apiName sendFeedback_QE
* @apiGroup API
*
* @apiDescription Send the feedback of the 'QE' mode and receive the new ranking with the accuracy.
*
* @apiParam {String} id Id of the query
* @apiParam {String} [url] Url of the image introduced to the system.
* @apiParam {String} [encoded_image] Encoded image uploaded to the system.
* @apiParam {String} dataset Dataset given
* @apiParam {String} [path] Path given in the case of 'complicated' datasets as 'instre'.
* @apiParam {String} similar_list List of the queries selected for the query expansion.
* @apiParam {String} mode Mode selected to be in use.
*
*
* @apiSuccess {array} json It has an array with the new ranking computed.
* @apiSuccess {Number} initial Contains the accuracy that the image had BEFORE the feedback was sent.
* @apiSuccess {Number} final Contains the accuracy that the image has AFTER the feedback has been sent.
* @apiSuccess {bool} success Indicates if the state of the request has been succesful AFTER
* dealing with the annotations.
*
* @apiExample {json} Request (QE mode)
*      {
*          "similar_list": [" paris_general_001620.jpg", " paris_general_002391.jpg", " paris_eiffel_000128.jpg"],
*          "dataset":"paris",
*          "mode": "q",
*          "url": null,
*          "encoded_image": null,
*          "path": null
*      }
*
* @apiExample {json} Request (Annotation mode)
*      {
*         "similar_list": {
*                           "positive": ["paris_general_001620.jpg", "paris_eiffel_000128.jpg"],
*                           "negative": ["paris_general_000144.jpg", "paris_general_002444.jpg"]
*			},
*          "dataset": "paris",
*          "mode": "a",
*          "url": null,
*          "encoded_image": null,
*          "path": null
*      }
*
*
* @apiExample {json} Success 200 (QE mode)
* {
*    "json": [{
*            "IdSequence": "0",
*            "Image": "paris_general_002391"
*        },
*        {
*            "IdSequence": "1",
*            "Image": "paris_eiffel_000128"
*        },
*             ...
*
*        {
*            "IdSequence": "5011",
*            "Image": "paris_invalides_000541"
*        }
*    ],
*    "initial": 0.700725,
*    "final": 0.639502
* }
*
* @apiExample {json} Success 200 (Annotation mode)
* {
*    "json": [{
*            "IdSequence": "0",
*            "Image": "paris_general_002391"
*        },
*        {
*            "IdSequence": "1",
*            "Image": "paris_eiffel_000128"
*        },
*             ...
*
*        {
*            "IdSequence": "5011",
*            "Image": "paris_invalides_000541"
*        }
*    ],
*    "success": true
* }
*
*/
exports.sendFeedback_receiveRanking = function (req, res, next) {
    let id = req.params.id;  //id = aaa.json  --> si no ve amb .json al final es una url
    let { dataset, url, encoded_image, path, similar_list, mode } = req.body;

    postFeedback(id, url, encoded_image, dataset, path, similar_list, mode, function(data){
        res.json(data);
    });
};

postFeedback = function(id, url, encoded_image, dataset, path, similar_list, mode, callback){

    let client = new zerorpc.Client();
    client.connect("tcp://localhost:4243");
    client.invoke("postFeedback_And_Update", id, url, encoded_image, dataset, path, similar_list, mode, function(error, res, more) {
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
