var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');
// var massive = require('massive');




var app = express()



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