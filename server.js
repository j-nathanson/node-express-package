// import and create express server app
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('here')
    // can put methods like send,status,json on server response
    res.status(500).json({
        message: "Error"
    })

})


// choose port
app.listen(3000)