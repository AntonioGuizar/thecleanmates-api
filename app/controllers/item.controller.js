const db = require("../models")
const Item = db.item

exports.createItem = async (req, res) => {
    try {
        const item = await Item.create({
        name: req.body.name,
        description: req.body.description,
        imagePath: req.body.imagePath,
        sku: req.body.sku,
        type: req.body.type,
        brandId: req.body.brandId
        })
        if (item) res.send({ message: "Item created successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.updateItem = async (req, res) => {
    try {
        const item = await Item.update({
        name: req.body.name,
        description: req.body.description,
        imagePath: req.body.imagePath,
        sku: req.body.sku,
        type: req.body.type,
        brandId: req.body.brandId
        }, {
        where: {
            id: req.body.id
        }
        })
        if (item) res.send({ message: "Item updated successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.destroy({
        where: {
            id: req.body.id
        }
        })
        if (item) res.send({ message: "Item deleted successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.allItems = async (req, res) => {
    try {
        const items = await Item.findAll()
        if (items) res.send({ items })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getItem = async (req, res) => {
    try {
        const id = req.params.id
        const item = await Item.findByPk(id)
        if (item) res.send({ item })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getItemByBrand = async (req, res) => {
    try {
        const id = req.params.id
        const items = await Item.findAll({
            where: {
                brandId: id
            }
        })
        if (items) res.send({ items })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getItemByType = async (req, res) => {
    try {
        const type = req.params.type
        const items = await Item.findAll({
            where: {
                type: type
            }
        })
        if (items) res.send({ items })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}