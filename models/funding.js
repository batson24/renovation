let mongoose= require('mongoose')
let fundingSchema= new mongoose.Schema({
    projectName: {type:String, unique: true}, //required: true},
    fundingAmount: {type:String, unique: true}, //required: true},
    story: {type:String, unique: true},// required: true},
    
    
})
let Funding= mongoose.model('Funding', fundingSchema)
module.exports= Funding