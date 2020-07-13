let mongoose= require('mongoose')
let contactSchema= new mongoose.Schema({
    email: {type:String, unique: true}, //required: true},
    subject: {type:String, unique: true}, //required: true},
    info: {type:String, unique: true},// required: true},
    
    
})
let Contact= mongoose.model('Contact', contactSchema)
module.exports= Contact