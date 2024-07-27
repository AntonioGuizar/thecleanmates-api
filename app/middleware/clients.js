const db = require("../models")
const Roles = db.Roles
const Client = db.Client

exports.checkDuplicateEmail = async (req, res, next) => {
    try {
        const client = await Client.findOne({
        where: {
            email: req.body.email
        }
        })
        if (client) {
        res.status(400).send({ message: "Email is already in use!" })
        return
        }
        next()
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.checkDuplicatePhone = async (req, res, next) => {
    try {
        const client = await Client.findOne({
        where: {
            phone: req.body.phone
        }
        })
        if (client) {
        res.status(400).send({ message: "Phone number is already in use!" })
        return
        }
        next()
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.checkRolesExisted = async (req, res, next) => {
    try {
        if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!Roles.includes(req.body.roles[i])) {
            res.status(400).send({
                message: `Role ${req.body.roles[i]} does not exist!`
            })
            return
            }
        }
        }
        next()
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
