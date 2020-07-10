let mongoose= require('mongoose')
let profileSchema= new mongoose.Schema({
    firstname: {type:String, unique: true}, //required: true},
    lastname: {type:String, unique: true}, //required: true},
    displayname: {type:String, unique: true},// required: true},
    occupation: String,
    investmenttype: String,
    aboutme: String,
    experience: Number,
    username: {type:String, unique: true},// required: true},
    password: {type:String, unique: true}, //required: true},
    confirmpassword: {type:String, unique: true},// required: true},
    
})
let User= mongoose.model('User', profileSchema)
module.exports= User