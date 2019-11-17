const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    NIC: { type: String, required: true, unique: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
    contactNo: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true, index: true },
    role: { type: String, required: true },
    password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

userSchema.pre('save', function(next){
    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(this.password, salt, (err,hash)=>{
            this.password=hash;
            this.saltSecret=salt;
            next();
    });
});
});

userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('user', userSchema, 'users')