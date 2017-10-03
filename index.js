const express       = require('express'),
    bodyParser      = require('body-parser'),
    http            = require('http'),
    morgan          = require('morgan'),
    cors            = require('cors'),
    router          = require('./router');
    app = express();


const port = process.env.PORT || 5000;


//App setup
if(process.env.NODE_ENV !== "test") {
	app.use(morgan('combined')); //adds requests logs to console
}

app.use(cors());
app.use(bodyParser.json({limit:1024*1024*20, type: '*/*' }));
app.use(bodyParser.urlencoded({limit:1024*1024*20, extended: true}));

let server = app.listen(port);
console.log('Server listening on: ' + port);

router(app);
module.exports = server;
