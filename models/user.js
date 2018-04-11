exports.userSchema = function() {
    user = {
        language: '',
        dob: '',
        lastname: '',
        firstname: '',
        middlename: '',
        suffix: '',
        address:{ street1: '', city:'', state:'', zip:'', country: ''},
        id: '',
        medications: {},
        allergies: {},
        new: true
    }
    return user;
}