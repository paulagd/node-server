const sessions = require('./test/sessions');
const rankins = require('./controllers/rankins');
const images = require('./controllers/images');

module.exports = function(app){
	// app.all(/\/api\//,requireAuth, (new Restful(sequelize)).route());
	// app.use(restful(sequelize));

    //test
    app.get('/sessions', sessions.findAll);
    app.get('/sessions/:id', sessions.findById);

    // images petitions to do from client part
    app.get('/getImageById/:id', images.getImageById);
    app.get('/getRankinById/:id', rankins.getRankinById);
    // app.post('/getTestList', sessions.algo);
    // app.post('/updateFeedback/:id', sessions.algo);


    //interactions with python part
    app.post('/writeRankinById/:id', rankins.writeRankinById);
    // app.get('/requestRankinById/:id', sessions.writeRankinById);
};
