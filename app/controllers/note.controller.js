const db = require("../models")
const Note = db.note

exports.createNote = async (req, res) => {
    try {
        const note = await Note.create({
            number: req.body.number,
            userId: req.body.userId,
            date: req.body.date,
            amount: req.body.amount,
            deadline: req.body.deadline,
            advance: req.body.advance,
            status: req.body.status,
        })
        if (note) res.send({ message: "Note created successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.updateNote = async (req, res) => {
    try {
        const note = await Note.update({
            number: req.body.number,
            userId: req.body.userId,
            date: req.body.date,
            amount: req.body.amount,
            deadline: req.body.deadline,
            advance: req.body.advance,
            status: req.body.status,
        }, {
            where: {
                id: req.body.id
            }
        })
        if (note) res.send({ message: "Note updated successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.deleteNote = async (req, res) => {
    try {
        const note = await Note.destroy({
            where: {
                id: req.body.id
            }
        })
        if (note) res.send({ message: "Note deleted successfully!" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.allNotes = async (req, res) => {
    try {
        const notes = await Note.findAll()
        if (notes) res.send({ notes })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getNote = async (req, res) => {
    try {
        const id = req.params.id
        const note = await Note.findByPk(id)
        if (note) res.send({ note })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getServicesByNoteId = async (req, res) => {
    try {
        const id = req.params.id
        const note = await Note.findByPk(id)
        const services = await note.getServices()
        if (services) res.send({ services })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getNotesByUserId = async (req, res) => {
    try {
        const id = req.params.id
        const notes = await Note.findAll({
            where: {
                userId: id
            }
        })
        if (notes) res.send({ notes })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getNotesAfterDate = async (req, res) => {
    try {
        const date = req.params.date
        const notes = await Note.findAll({
            where: {
                date: {
                    [Op.gte]: date
                }
            }
        })
        if (notes) res.send({ notes })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getNotesBeforeDate = async (req, res) => {
    try {
        const date = req.params.date
        const notes = await Note.findAll({
            where: {
                date: {
                    [Op.lte]: date
                }
            }
        })
        if (notes) res.send({ notes })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getNotesBetweenDates = async (req, res) => {
    try {
        const start = req.params.start
        const end = req.params.end
        const notes = await Note.findAll({
            where: {
                date: {
                    [Op.between]: [start, end]
                }
            }
        })
        if (notes) res.send({ notes })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getNotesByUserBetweenDates = async (req, res) => {
    try {
        const id = req.params.id
        const start = req.params.start
        const end = req.params.end
        const notes = await Note.findAll({
            where: {
                userId: id,
                date: {
                    [Op.between]: [start, end]
                }
            }
        })
        if (notes) res.send({ notes })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getNotesByServiceId = async (req, res) => {
    try {
        const id = req.params.id
        const service = await Service.findByPk(id)
        const notes = await service.getNotes()
        if (notes) res.send({ notes })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getNotesByServiceIdBetweenDates = async (req, res) => {
    try {
        const id = req.params.id
        const start = req.params.start
        const end = req.params.end
        const service = await Service.findByPk(id)
        const notes = await service.getNotes({
            where: {
                date: {
                    [Op.between]: [start, end]
                }
            }
        })
        if (notes) res.send({ notes })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getNotesByUserIdAndServiceId = async (req, res) => {
    try {
        const userId = req.params.userId
        const serviceId = req.params.serviceId
        const notes = await Note.findAll({
            where: {
                userId: userId,
                serviceId: serviceId
            }
        })
        if (notes) res.send({ notes })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getNotesByUserIdAndServiceIdBetweenDates = async (req, res) => {
    try {
        const userId = req.params.userId
        const serviceId = req.params.serviceId
        const start = req.params.start
        const end = req.params.end
        const notes = await Note.findAll({
            where: {
                userId: userId,
                serviceId: serviceId,
                date: {
                    [Op.between]: [start, end]
                }
            }
        })
        if (notes) res.send({ notes })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getNotesByStatus = async (req, res) => {
    try {
        const status = req.params.status
        const notes = await Note.findAll({
            where: {
                status: status
            }
        })
        if (notes) res.send({ notes })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

exports.getNotesByDeadline = async (req, res) => {
    try {
        const deadline = req.params.deadline
        const notes = await Note.findAll({
            where: {
                deadline: deadline
            }
        })
        if (notes) res.send({ notes })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}