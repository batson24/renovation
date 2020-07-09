//Variables and Require
let express= require('express')
let app= express()
let methodOverride= require('method-override')
let mongoose= require('mongoose')
require('dotenv').config()
let PORT= process.env.PORT || 3000
let session= require('express-session') 
let bcrypt= require('bcrypt')
let hashedString = bcrypt.hashSync('yourStringHere', bcrypt.genSaltSync(10))
let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/'+ `reno`;

//localhost:27017/reno

// Mongoose Connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> { console.log('connected to mongo');
});

// controller
let renoController= require('./controllers/renocontrol.js')
let apiController= require('./controllers/api.js')
//Session

//App.use
app.use(express.static('public')) //css
app.use(express.urlencoded({extended: false}))
app.use('/reno',renoController) //controller routes URGENT REMEMBER PREFIX
app.use('/reno', apiController)
app.use(
    session({
      secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
      resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
      saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
    })
  )

//ROUTES
app.get('/reno',(req,res)=>{
    req.session.anyProperty= 'any value'
    console.log(req.session)   
    res.render('index.ejs',{
        tabTitle:'Home Page',
    

    
    })
})

app.get('/reno/new', (req,res)=>{
    res.render('new.ejs',{
    tabTitle:'Login'
    })
})

app.post('/reno/show', (req,res)=>{
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
    res.redirect('/')
  })*/
res.redirect('/reno')
})

app.get('/reno/show',(req,res)=>{

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