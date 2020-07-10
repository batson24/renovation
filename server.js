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
const User = require('./models/profile.js')



// Mongoose Connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> { console.log('connected to mongo');
});

// controller
let userController= require('./controllers/user.js')
let apiController= require('./controllers/api.js')
let properties= require('./models/sampleprops.js')
//Session

//App.use

app.use(express.static('public')) //css
app.use(express.urlencoded({extended: false}))
app.use('/reno',userController) //controller routes URGENT REMEMBER PREFIX
app.use('/reno', apiController)
//app.use(
  /*  session({
      secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
      resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
      saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
    })
  )*/

//ROUTES
app.get('/',(req,res)=>{
    res.redirect('/reno')

})
app.get('/reno',(req,res)=>{
    //req.session.anyProperty= 'any value'
    console.log(req.session)   
    res.render('index.ejs',{
        tabTitle:'Home Page',
        properties: properties,
    

    
    })
})
app.get('/new', (req,res)=>{
    
    res.render('new.ejs',{
    tabTitle:'Login'
    
    })
})

app.post('/reno', (req,res)=>{

  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
      console.log(err)
      console.log(req.body)
   console.log('user is created', createdUser)
    res.redirect('/reno/show')
//if login successful redirect to show if error alert redirect to new

//if signup successful redirect to profile setup edit page

//if subscribe redirect to profile setup
    
/*app.get('/retrieve', (req, res) => {
    //any route will work
    if (req.session.anyProperty === 'something you want it to') {
      //test to see if that value exists
      //do something if it's a match
      console.log('it matches! cool')
    } else {
      //do something else if it's not
      console.log('nope, not a match')
    }
    res.redirect('/')*/
  })

})

app.get('/reno/show',(req,res)=>{
    res.render('show.ejs',{
    
    tabTitle:'Home Page',})
    })
    



app.delete('/reno/:id',(req,res)=>{

})

app.get('/reno/:index/edit',(req,res)=>{

})

app.put('/reno/:index',(req,res)=>{

})



app.listen(PORT,()=>{
    console.log('READY TO RUMBLE')
})