// router is like a mini app that lives inside the main app
const express = require("express")
const router = express.Router()

// sets up middleware only for users route
router.use(logger)

// Order of the router matter. Put static routes about dynamically requested

// GET for just '/users'
router.get('/', (req, res) => {
    // users?name=bob
    console.log(req.query.name);
    res.send("User List")
})

// GET for 'users/new'. render the new.ejs file and set variable firstName
router.get('/new', (req, res) => {
    res.render('users/new', {
        firstName: "test"
    })
})

// POST
//push user to array
router.post('/', (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push({
            firstName: req.body.firstName
        })
        res.redirect(`users/${users.length-1}`)
    } else {
        console.log("Error")
        res.render("users/new", {
            firstName: req.body.firstName
        })
    }
    res.send('hi')
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

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}


// export
module.exports = router;