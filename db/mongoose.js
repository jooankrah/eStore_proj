const mongoose = require('mongoose')

//const dbUrl = 'mongodb://Jooankrah:Nanakusi1z@ds061681.mlab.com:61681/heroku_q0q5mnrs'

mongoose.connect('mongodb://127.0.0.1:27017/estore', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})