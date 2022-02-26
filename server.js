// import and create express server app
const express = require("express")
const app = express()


const hostname = 'localhost';
const port = 3000;

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    console.log("here")
    // can put methods like send,status,json on server 
    res.render('index')
})


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});