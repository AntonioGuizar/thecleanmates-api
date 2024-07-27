// Author: Antonio Guizar
// Description: This file is the main entry point for the The Clean Mates API RESTful application.

require('dotenv').config()

const express = require("express")
const cors = require("cors")
const cookieSession = require("cookie-session")

// Create an Express app
const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: '*'
}));

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

const db = require("./app/models")
const initial = require("./app/config/db.js")

const PORT = (process.env.NODE_ENV === 'production') ? process.env.PROD_PORT : process.env.DEV_PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
});

const sync = async () => {
    if (process.env.NODE_ENV === 'production') {
        await db.sequelize.sync()
    } else {
        await db.sequelize.sync()
        await db.sequelize.sync({force: true}).then(() => {
            console.log("Drop and re-sync db.")
            initial.start()
        })
    }
}

sync()

// routes
require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)
require('./app/routes/brand.routes.js')(app)
require('./app/routes/item.routes.js')(app)

module.exports = app