const express       = require('express'),
    bodyParser      = require('body-parser'),
    // methodOverride  = require('method-override'),
    http            = require('http'),
    morgan          = require('morgan'),
    cors            = require('cors'),
    router          = require('./router');
    app = express();

const execSentinela = require('./test_python').execSentinela;

// app.use(methodOverride());      // simulate DELETE and PUT

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });
//


const port = process.env.PORT || 5000;


//App setup
if(process.env.NODE_ENV !== "test") {
	app.use(morgan('combined')); //adds requests logs to console
}

app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
// app.use(bodyParser);

execSentinela();
setInterval(execSentinela, 10*60*1000); // cada 10 min.


var server = app.listen(port);
console.log('Server listening on: ' + port);

router(app);

module.exports = server;
