const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const saltRaounds = 10;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    carrito: {type: Array, default: []},
    diseno: {type: Array, default: []}

});

UserSchema.pre('save', function(next){
    if(this.isNew || this.ismodified('password')){
        
        const document = this;
        bcrypt.hash(document.password, saltRaounds, (err, hashedPassword) =>{
            if (err){
                next(err);
            }else{
                document.password = hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
});

UserSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    });
}

//convertir modelo
const User = mongoose.model('User', UserSchema);

export default User;