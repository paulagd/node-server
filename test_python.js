var zerorpc = require("zerorpc");

exports.execSentinela = function(req, res, next) {
    var client = new zerorpc.Client();
    client.connect("tcp://127.0.0.1:4242");

    // client.invoke("hello", "RPC", function(error, res, more) {
    //     console.log(res);
    // });
    client.invoke("postServer", "aaa.json", function(error, res, more) {
        if(error) {
            console.error(error);
        } else {
            console.log("UPDATE:", res);
        }

        if(!more) {
            console.log("Done.");
        }
    });

    // client.close();
}
