const db = require("../models")
const Sneaker = db.sneaker

exports.createSneaker = async (req, res) => {
    try {
        const sneaker = await Sneaker.create({
        name: req.body.name,
        description: req.body.description,
        sku: req.body.sku,
        brandId: req.body.brandId
        })
        if (sneaker) res.send({ message: "Sneaker created successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.updateSneaker = async (req, res) => {
    try {
        const sneaker = await Sneaker.update({
        name: req.body.name,
        description: req.body.description,
        sku: req.body.sku,
        brandId: req.body.brandId
        }, {
        where: {
            id: req.body.id
        }
        })
        if (sneaker) res.send({ message: "Sneaker updated successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.deleteSneaker = async (req, res) => {
    try {
        const sneaker = await Sneaker.destroy({
        where: {
            id: req.body.id
        }
        })
        if (sneaker) res.send({ message: "Sneaker deleted successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.allSneakers = async (req, res) => {
    try {
        const sneakers = await Sneaker.findAll()
        if (sneakers) res.send({ sneakers })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getSneaker = async (req, res) => {
    try {
        const id = req.params.id
        const sneaker = await Sneaker.findByPk(id)
        if (sneaker) res.send({ sneaker })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}