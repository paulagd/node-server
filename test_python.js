var spawn = require('child_process').spawn,
    py    = spawn('python', ['test_without_api.py']),
    dataString = '',
    jsonfile = require('jsonfile');


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
      var write_this = dataString.trim();
      var file_to_write_in = './rankins/'+ id ;

      //si no existe el file_to_write_in lo crea. Si existe le añade lo que pongamos.Sin el flag a lo REESCRIBE
      jsonfile.writeFile(file_to_write_in, write_this, {flag: 'a'}, function (err) {  //flag a is to write in an existing file
          if(err)
          console.log(err);

          console.log("DONE");
      })

    });

    // FIRST WRITE DATA X CONSOLE...
    py.stdin.write(JSON.stringify(id));
    py.stdin.end();

}
