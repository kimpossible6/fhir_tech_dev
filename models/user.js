exports.userSchema = function() {
    user = {
        language: '',
        dob: '',
        lastname: '',
        firstname: '',
        middlename: '',
        suffix: '',
        address:{ street1: '', city:'', state:'', zip:'', country: ''},
        phone: '',
        email: '',
        id: '',
        medications: {},
        allergies: {},
        emergency_contact: {
            lastname:'',
            firstname: '',
            street1: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            relationship: ''
        },
        new: true
    }
    return user;
}