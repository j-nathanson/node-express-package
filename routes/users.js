// router is like a mini app that lives inside the main app
const express = require("express")
const router = express.Router()

// for just '/users'
router.get('/', (req, res) => {
    res.send("User List")
})

// for 'users/new'
router.get('/new', (req, res) => {
    res.send("User new form")

})

// export
module.exports = router;