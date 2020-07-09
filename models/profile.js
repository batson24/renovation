let mongoose= require('mongoose')
let profile= new mongoose.Schema({
    firstname: {type:String, unique: true, required: true},
    lastname: {type:String, unique: true, required: true},
    displayname: {type:String, unique: true, required: true},
    occupation: String,
    investmenttype: String,
    aboutme: String,
    experience: Number,
    membership: Boolean,




})
let profile= mongoose.model('profile', profileSchema)
modules.exports= profile