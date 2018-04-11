
module.exports = function(app) {
	var index = require('../controllers/index.server.controller.js');
	app.get('/', index.selectlanguage);
	app.get('/select_language', index.selectlanguage);
	app.post('/language', index.savelanguage);
	app.get('/not_recognized', index.notrecognized);
	app.get('/new_name', index.newname);
	app.get('/new_confirm_name', index.newname);
	app.post('/new_name', index.savename);
	app.get('/new_dob', index.newdob);
	app.get('/new_confirm_dob', index.newdob);
	app.post('/new_dob', index.savedob);
	app.get('/new_address', index.newaddress);
	app.get('/new_confirm_address', index.newaddress);
	app.post('/new_address', index.saveaddress);
	app.get('/new_phone_email', index.newphoneemail);
	app.post('/new_phone_email', index.savephoneemail);
	app.get('/new_emergency_contact', index.newemergencycontact);
	app.post('/new_emergency_contact', index.saveemergencycontact);
	app.get('/end_screen', index.endscreen);
	app.get('/are_you_sure', index.areyousure);
	
};