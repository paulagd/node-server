const rankins = require('./controllers/rankins');
const images = require('./controllers/images');

module.exports = function(app){

    app.get('/getImageById/:id', images.getImageById);
    app.get('/getRankinById/:id', rankins.getRankinById);
    // app.post('/getTestList', sessions.algo);
    // app.post('/updateFeedback/:id', sessions.algo);

};
