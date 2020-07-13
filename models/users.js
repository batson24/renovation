let mongoose= require('mongoose')
let userSchema= new mongoose.Schema({
    firstname: {type:String, unique: true, required: true},
    lastname: {type:String, unique: true, required: true},
    displayname: {type:String, unique: true, required: true},
    occupation: String,
    investmenttype: String,
    aboutme: String,
    experience: Number,
    username: {type:String, unique: true, required: true},
    password: {type:String, unique: true, required: true},
    confirmpassword: {type:String,  required: true},
    
})
let User= mongoose.model('User', userSchema)
module.exports= User