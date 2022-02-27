// import and create express server app
const express = require("express")
const morgan = require('morgan')
const app = express()

// middle ware should be defined at the top of the page to be used in all routes
app.use(morgan('dev'));


// set up host name and port
const hostname = 'localhost';
const port = 3000;

// access and return static html files from public folder
// middleware to use req body from the form
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))

// set view engine to ejs to read the ejs files
app.set("view engine", "ejs")


// import the user router from users.js
const userRouter = require('./routes/users')

// link the userRouter to the app. Enter in what directory to listen for
app.use('/users', userRouter)



app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});