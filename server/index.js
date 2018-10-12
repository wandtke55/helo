require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const axios = require('axios');
const ctrl = require('./controller');
const {
    SERVER_PORT,
    CONNECTION_STRING,
    SECRET
} = process.env;

const app = express();

//connect to db
massive(CONNECTION_STRING).then(db => {
    console.log('connected to db')
    app.set('db', db)
})

//middleware
app.use(bodyParser.json());


//endpoints
app.post('/api/register', ctrl.register)
app.post('/api/login', ctrl.login)

//app.listen
app.listen(SERVER_PORT, ()=>{
    console.log(`listening on port: ${SERVER_PORT}`)
})