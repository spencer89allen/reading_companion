var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');
var massive = require('massive');

require('dotenv').config({ path: __dirname + '/.env'});


var app = express()

massive(process.env.CONNECTION_STRING,{scripts: __dirname + '/db'}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log(`The database is connected`)
}).catch( e => {
    console.log(process.env.CONNECTION_STRING)
    console.error(e);
});

//BODYPARSER INVOKED
app.use(bodyParser.json());



//SESSIONS
app.use(sessions({
    saveUninitialized: false,
    resave: false,
    secret: "shhh it's a secret"
}));



//SERVER LISTINING
var port = process.env.PORT || 4545;
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
});