const db = require("../models")
const Brand = db.brand

exports.createBrand = async (req, res) => {
    try {
        const brand = await Brand.create({
        name: req.body.name,
        logo_path: req.body.logo_path,
        })
        if (brand) res.send({ message: "Brand created successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.updateBrand = async (req, res) => {
    try {
        const brand = await Brand.update({
        name: req.body.name,
        logo_path: req.body.logo_path,
        }, {
        where: {
            id: req.body.id
        }
        })
        if (brand) res.send({ message: "Brand updated successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.deleteBrand = async (req, res) => {
    try {
        const brand = await Brand.destroy({
        where: {
            id: req.body.id
        }
        })
        if (brand) res.send({ message: "Brand deleted successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.allBrands = async (req, res) => {
    try {
        const brands = await Brand.findAll()
        if (brands) res.send({ brands })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getBrand = async (req, res) => {
    try {
        const id = req.params.id
        const brand = await Brand.findByPk(id)
        if (brand) res.send({ brand })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}