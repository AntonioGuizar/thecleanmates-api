const { authJwt } = require("../middleware")
const controller = require("../controllers/sneaker.controller")

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        )
        next()
    })

    app.post(
        "/api/sneaker/create",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.createSneaker
    )

    app.put(
        "/api/sneaker/update",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateSneaker
    )

    app.post(
        "/api/sneaker/delete",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteSneaker
    )

    app.get(
        "/api/sneaker/all",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.allSneakers
    )

    app.get(
        "/api/sneaker/:id",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getSneaker
    )
}