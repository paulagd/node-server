const rankins = require('./controllers/rankins');
const feedback = require('./controllers/feedback');
const images = require('./controllers/images');
const qimLists = require('./controllers/qimLists');

module.exports = function(app){

    app.get('/getImageOxfordById/:id', images.getImageOxfordById);
    app.get('/getImageParisById/:id', images.getImageParisById);
    app.get('/getImageInstreById/', images.getImageInstreById);

    app.post('/getRankinById/:id', rankins.getRankinById);

    app.get('/getQimListOxford/', qimLists.getQimListOxford);
    app.get('/getQimListParis/', qimLists.getQimListParis);
    app.get('/getQimListInstre/', qimLists.getQimListInstre);
    // app.post('/getTestList', sessions.algo);
    app.post('/sendFeedback_receiveRanking/:id', feedback.sendFeedback_receiveRanking);

};
