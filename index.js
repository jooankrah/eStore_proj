const path = require('path')
const express = require('express')
bodyParser  = require("body-parser")
passport    = require("passport")
LocalStrategy = require("passport-local")
const hbs = require('hbs')
require('./db/mongoose')
const prouctRouter = require('./routers/product')


const app = express()
const port = process.env.PORT || 3000


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.use(express.static(path.join(__dirname, './files')))




// // PASSPORT CONFIGURATION
// app.use(require("express-session")({
//     secret: "God is the Greatest",
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy({
//     usernameField: 'serial',
//     passwordField: 'pin',
//     },Applicant.authenticate()));
// passport.serializeUser(Applicant.serializeUser());
// passport.deserializeUser(Applicant.deserializeUser());

// app.use(function(req, res, next){
//    res.locals.currentUser = req.user;
//    next();
// });




app.use(express.json())
app.use(prouctRouter)


app.use(function(req, res, next){
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
      res.render('404', { url: req.url });
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.send({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
  });



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

