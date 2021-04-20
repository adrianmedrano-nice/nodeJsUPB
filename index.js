const express = require('express')
const morgan =  require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
//Initialization
const app = express()
require("./database")

//Settings
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.set('Port', process.env.PORT || 4000)

app.use(morgan('dev'))
app.use('/api/',require('./routes/person.route'))

app.listen(app.get('Port'), ()=>{
    console.log(`Express server on port ${app.get('Port')}`)
})