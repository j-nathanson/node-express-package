// import and create express server app
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('here')
    res.sendStatus(500)

})


// choose port
app.listen(3000)