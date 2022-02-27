// import and create express server app
const express = require("express")
const morgan = require('morgan')
const app = express()

// morgan middleware
app.use(morgan('dev'));

// set up host name and port
const hostname = 'localhost';
const port = 3000;

// set view engine to ejs to read the ejs files
app.set("view engine", "ejs")

// on first load run the index.ejs file and create a variable to send down
app.get("/", (req, res) => {
    console.log("here")
    res.render('index', {
        text: "world"
    })
})

// import the user router from users.js
const userRouter = require('./routes/users')

// link the userRouter to the app. Enter in what directory to listen for
app.use('/users', userRouter)



app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});