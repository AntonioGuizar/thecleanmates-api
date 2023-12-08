const { authJwt } = require("../middleware")
const controller = require("../controllers/note.controller")

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        )
        next()
    })

    app.post(
        "/api/note/create",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.createNote
    )

    app.put(
        "/api/note/update",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateNote
    )

    app.post(
        "/api/note/delete",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteNote
    )

    app.get(
        "/api/note/all",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.allNotes
    )

    app.get(
        "/api/note/:id",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getNote
    )

    app.get(
        "/api/note/:id/services",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getServicesByNoteId
    )

    app.get(
        "/api/notesByUser/:id",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getNotesByUserId
    )

    app.get(
        "/api/notesAfterDate/:date",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getNotesAfterDate
    )

    app.get(
        "/api/notesBeforeDate/:date",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getNotesBeforeDate
    )

    app.get(
        "/api/notesBetweenDates/:start/:end",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getNotesBetweenDates
    )

    app.get(
        "/api/notesByUserBetweenDates/:id/:start/:end",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getNotesByUserBetweenDates
    )

    app.get(
        "/api/notesByServiceId/:id",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getNotesByServiceId
    )

    app.get(
        "/api/notesByServiceIdBetweenDates/:id/:start/:end",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getNotesByServiceIdBetweenDates
    )

    app.get(
        "/api/notesByUserIdAndServiceId/:userId/:serviceId",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getNotesByUserIdAndServiceId
    )

    app.get(
        "/api/notesByUserIdAndServiceIdBetweenDates/:userId/:serviceId/:start/:end",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getNotesByUserIdAndServiceIdBetweenDates
    )
    
    app.get(
        "/api/notesByStatus/:status",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getNotesByStatus
    )

    app.get(
        "/api/notesByDeadline/:deadline",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getNotesByDeadline
    )

}