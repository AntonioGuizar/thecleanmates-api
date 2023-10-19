// Author: Antonio Guizar
// Description: This file is the main entry point for the The Clean Mates API RESTful application.

require('dotenv').config()

const express = require("express")
const cors = require("cors")
const cookieSession = require("cookie-session")

// Create an Express app
const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(cors())

// generate an app key
app.keys = [process.env.APP_KEY]

app.use(cookieSession({
    name: 'session',
    keys: app.keys,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(express.json())

// Define a simple GET route for show the README.md file
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/readme.html')
});

// Set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
});

const db = require("./app/models")
db.sequelize.sync()

// routes
require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)
require('./app/routes/brand.routes.js')(app)
//require('./app/routes/sneaker.routes.js')(app)