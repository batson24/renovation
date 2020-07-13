//Variables and Require
let express= require('express')
let app= express()
let methodOverride= require('method-override')
let mongoose= require('mongoose')
require('dotenv').config()
let PORT= process.env.PORT || 3000
let session= require('express-session') 
let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/'+ `reno`;
const bcrypt = require('bcrypt')
//let User = require('./models/profile.js')



// Mongoose Connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> { console.log('connected to mongo');
});

// controller
let contactController= require('./controllers/contact.js')
let apiController= require('./controllers/api.js')
let properties= require('./models/sampleprops.js')
let jquery= require('jquery')
//Session
let sessionsController = require('./controllers/sessions.js')
//user
let userController= require('./controllers/users.js')
let subscribeController= require('./controllers/subscribe.js')
let fundingController= require('./controllers/funding.js')

//App.use
app.use(
    session({
      secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
      resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
      saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
    })
  )
app.use(express.static('public')) //css
app.use(express.urlencoded({extended: false}))
app.use('/contact',contactController) //controller routes URGENT REMEMBER PREFIX
//app.use('/profile', apiController)
app.use('/subscribe', subscribeController)
app.use('/funding', fundingController)


  //sessions
app.use('/sessions', sessionsController)
app.use('/users', userController)

//ROUTES
app.get('/',(req,res)=>{
    res.redirect('/profile')

})
app.get('/profile',(req,res)=>{
    //req.session.anyProperty= 'any value'
    console.log(req.session)   
    res.render('index.ejs',{
        tabTitle:'Home Page',
        properties: properties,
       login: req.session.login
    

    
    })
})





 



app.delete('/profile/',(req,res)=>{
    User.findByUsernameAndRemove(req.session.currentUser, { useFindAndModify: false }, (err, data)=>{
        //res.redirect('/store') //redirect back to fruits index
      })
})

app.get('/profile/:id/edit', (req, res)=>{
    User.findById(req.params.id, (err, foundUser)=>{
        res.render('edit.ejs',
          { user: foundUser,
           login: req.session.login
           //user: User.findById[req.params.id] //pass in found user 
        })
})
  })

 

app.listen(PORT,()=>{
    console.log('READY TO RUMBLE')
})