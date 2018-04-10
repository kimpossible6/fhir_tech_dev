
module.exports = function(app) {
	var index = require('../controllers/index.server.controller.js');
	app.get('/', index.render);
	app.post('/language', index.savelanguage);
	app.get('/not_recognized', index.notrecognized);
	app.get('/new_name', index.newname);
	app.post('/new_name', index.savename);
	
};