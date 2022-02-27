// router is like a mini app that lives inside the main app
const express = require("express")
const router = express.Router()

// Order of the router matter. Put static routes about dynamically requested

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

// chain routes to individual user.  GET , PUT, DELETE
router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get user with ID: ${req.params.id}`)
    })
    .put((req, res) => {
        req.params.id
        res.send(`Update user with ID: ${req.params.id}`)
    })
    .delete((req, res) => {
        req.params.id
        res.send(`Delete user with ID: ${req.params.id}`)
    })

const users = [{
    name: "kyle"
}, {
    name: 'sally'
}]

// look for parameter of id and use value of the id to save as a property in the req object
// param is type of middleware, param runs first
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    console.log(id)
    next()
})



// export
module.exports = router;