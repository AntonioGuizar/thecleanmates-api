const db = require("../models")
const Client = db.client

exports.createClient = async (req, res) => {
    try {
        const client = await Client.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        role: 3
        })
        if (client) res.send({ message: "Client created successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.updateClient = async (req, res) => {
    try {
        const client = await Client.update({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        }, {
        where: {
            id: req.body.id
        }
        })
        if (client) res.send({ message: "Client updated successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.deleteClient = async (req, res) => {
    try {
        const client = await Client.destroy({
        where: {
            id: req.body.id
        }
        })
        if (client) res.send({ message: "Client deleted successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.allClients = async (req, res) => {
    try {
        const clients = await Client.findAll()
        if (clients) res.send({ clients })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getClientById = async (req, res) => {
    try {
        const client = await Client.findOne({
        where: {
            id: req.body.id
        }
        })
        if (client) res.send({ client })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

