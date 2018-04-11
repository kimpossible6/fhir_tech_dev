
module.exports = function(app) {
	var index = require('../controllers/index.server.controller.js');
	app.get('/', index.render);
	app.post('/language', index.savelanguage);
	app.get('/not_recognized', index.notrecognized);
	app.get('/new_name', index.newname);
	app.post('/new_name', index.savename);
	app.get('/new_dob', index.newdob);
	app.post('/new_dob', index.savedob);
	app.get('/new_address', index.newaddress);
	app.post('/new_address', index.saveaddress);
	
};