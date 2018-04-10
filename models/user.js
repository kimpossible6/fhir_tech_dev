exports.userSchema = function() {
    user = {
        language: '',
        birthdate: '',
        lastname: '',
        firstname: '',
        middlename: '',
        suffix: '',
        ssn:'',
        id: '',
        medications: {},
        allergies: {},
        new: true
    }
    return user;
}