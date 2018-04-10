exports.userSchema = function() {
    user = {
        language: '',
        birthdate: '',
        lastname: '',
        firstname: '',
        middlename: '',
        ssn:'',
        id: '',
        medications: {},
        allergies: {},
        new: true
    }
    return user;
}