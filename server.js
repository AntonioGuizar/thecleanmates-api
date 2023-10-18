// Author: Antonio Guizar
// Description: This file is the main entry point for the The Clean Mates API RESTful application.

const express = require("express")
const cors = require("cors")
const cookieSession = require("cookie-session")

// Create an Express app
const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(cors())

// generate an app key
app.keys = ['cGQxeThyaTBjbWltNHFrcTFxZjJ2d2xrNXdwNmlvYmU']

app.use(cookieSession({
    name: 'session',
    keys: app.keys,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(express.json())

// Define a simple GET route for testing.
app.get("/", (req, res) => {
  res.json({ message: "Welcome to The Clean Mates application." })
});

// Set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
});

const db = require("./app/models")
const Role = db.role
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.")
    initial()
})

function initial() {
    Role.create({
        id: 1,
        name: "admin"
    })

    Role.create({
        id: 2,
        name: "user"
    })

    Role.create({
        id: 3,
        name: "cleaner"
    })

    Role.create({
        id: 4,
        name: "client"
    })

// routes
require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)

}