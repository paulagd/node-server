var spawn = require('child_process').spawn,
    py    = spawn('python', ['test_without_api.py']),
    data = [1,2,3,4,5,6,7,8,9],
    dataString = '';

exports.execSentinela = function(req, res, next) {
    // Here we are saying that every time our node application receives data from the
    // python process output stream(on 'data'), we want to convert that received data
    // into a string and append it to the overall dataString.
    var id = 'aaa.json';

    py.stdout.on('data', function(obj){
      dataString += obj.toString();
    });

    //when it ends...
    py.stdout.on('end', function(){
      console.log('rank_data : ',dataString);
    });

    // FIRST WRITE DATA X CONSOLE...
    py.stdin.write(JSON.stringify(id));
    py.stdin.end();
}
