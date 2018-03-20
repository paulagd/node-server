const rankins = require('./controllers/rankins');
const feedback = require('./controllers/feedback');
const images = require('./controllers/images');
const qimLists = require('./controllers/qimLists');

module.exports = function(app){

    app.get('/getImageById/:id', images.getImageById);

    app.post('/getRankinById/:id', rankins.getRankinById);

    app.post('/getQimListDataset/', qimLists.getQimListDataset);
    app.post('/getIimlist/', qimLists.getIimlist);

    app.post('/sendFeedback_receiveRanking/:id', feedback.sendFeedback_receiveRanking);

};
