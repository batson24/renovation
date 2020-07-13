let mongoose= require('mongoose')
let fundingSchema= new mongoose.Schema({
    email: {type:String, unique: true}, //required: true},
    subject: {type:String, unique: true}, //required: true},
    info: {type:String, unique: true},// required: true},
    
    
})
let Funding= mongoose.model('Funding', fundingSchema)
module.exports= Funding