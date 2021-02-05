//server
const express = require('express');
//debug
const startUpDebug = require('debug')('app:startUpDebugger');
const dbDebug = require('debug')('app:dbDebugger');
const config = require('config'); //loads config files
//utility
const helmet = require('helmet'); //Helps secure your apps by setting various HTTP headers.
const morgan = require('morgan'); //HTTP request logger
// router -> urls
const courses = require('./controllers/courses'); // load router for a given url -> '/api/courses'
const main = require('./controllers/main'); // load router for a given url -> '/'
//custom middlewares
const doLogging = require('./middleware/logging.js') // custom middleware function
const doAuth = require('./middleware/authentication.js') // custom middleware function

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug'); // template engine
app.set('views', './views'); // path to templates
app.use(express.json());
app.use(express.urlencoded({extended: true})); // parses url : req.body -> key=value&key=value
app.use(express.static('public')); // http://localhost:3000/your_file It will show the file
app.use(helmet());
//custom middleware functions
//logging-authentication
app.use(doLogging);
app.use(doAuth)

//urls
app.use('/', main);
app.use('/api/courses', courses);

//define configuration
console.log("My config 1: " + config.get('name.module'));
// console.log("My config 1: " + config.get('mail.password'));
console.log("My config 1: " + config.get('name'));

//define environment
console.log(`NODE_ENV is ${process.env.NODE_ENV}`);
console.log(`app.get('env') is ${app.get('env')}`);
if (app.get('env') === 'development') { //Use Morgan only in development mode
    app.use(morgan('tiny'));
    startUpDebug("Morgan enabled");
    // console.log("Morgan enabled");
    // dbDebugger
    // some db work here
    dbDebug(">>>DB started<<<")
}


app.listen(port, () => console.log("Listening on port " + port));


