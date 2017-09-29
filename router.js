const sessions = require('./routes/sessions');

module.exports = function(app){
	// app.all(/\/api\//,requireAuth, (new Restful(sequelize)).route());
	// app.use(restful(sequelize));

    //petitions
    app.get('/sessions', sessions.findAll);
    app.get('/sessions/:id', sessions.findById);
    app.get('/oxbuild_images/:id', sessions.getImageById);
};
