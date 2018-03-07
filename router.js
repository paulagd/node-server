const rankins = require('./controllers/rankins');
const feedback = require('./controllers/feedback');
const images = require('./controllers/images');
const qimLists = require('./controllers/qimLists');

module.exports = function(app){

    // app.get('/getImageOxfordById/:id', images.getImageOxfordById);
    // app.get('/getImageParisById/:id', images.getImageParisById);
    // app.get('/getImageInstreById/:id', images.getImageInstreById);

    app.get('/getImageById/:id', images.getImageById);

    app.post('/getRankinById/:id', rankins.getRankinById);

    // app.post('/getIdFromPath/', qimLists.getIdFromPath);
    // app.post('/getPathfromId/:id', qimLists.getPathfromId);

    app.post('/getQimListDataset/', qimLists.getQimListDataset);
    app.post('/getIimlist/', qimLists.getIimlist);

    app.post('/sendFeedback_receiveRanking/:id', feedback.sendFeedback_receiveRanking);

};
