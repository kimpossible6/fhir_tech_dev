var user = require('./../models/user.js');

exports.render = function(req, res) {
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit);
	}
	req.session.lastVisit = new Date();
	//create user and add to session
	var thisUser = user.userSchema();
	req.session.user = thisUser;
	//render the index.ejs template
	res.render('select_language', {	});
};

exports.savelanguage = function(req, res) {
	req.session.user.language = req.body.language;
	res.render('fa_recog', {});
	
};

exports.notrecognized = function(req, res) {
	res.render('not_recognized', {});
	
};

exports.newname = function(req, res) {
	if (req.query.name === 'none') {
		//remove saved name
		req.session.user.lastname = '';
		req.session.user.firstname = '';
		req.session.user.middlename = '';
		req.session.user.suffix = '';
	}
	console.log(req.session);
	res.render('new_name', {});
}

exports.savename = function(req, res) {
	req.session.user.lastname = req.body.lastname;
	req.session.user.firstname = req.body.firstname;
	req.session.user.middlename = req.body.middlename;
	req.session.user.suffix = req.body.suffix;
	res.render('new_confirm_name', req.session.user)
}