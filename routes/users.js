// router is like a mini app that lives inside the main app
const express = require("express")
const router = express.Router()

// GET for just '/users'
router.get('/', (req, res) => {
    res.send("User List")
})

// GET for 'users/new'
router.get('/new', (req, res) => {
    res.send("User new form")
})

// POST
router.post('/', (req, res) => {
    res.send("Create User")
})

// GET individual user
router.get('/:id', (req, res) => {
    req.params.id
    res.send(`Get user with ID: ${req.params.id}`)
})
// export
module.exports = router;