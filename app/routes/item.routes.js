const { authJwt } = require("../middleware")
const controller = require("../controllers/item.controller")

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        )
        next()
    })

    app.post(
        "/api/item/create",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.createItem
    )

    app.put(
        "/api/item/update",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateItem
    )

    app.post(
        "/api/item/delete",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteItem
    )

    app.get(
        "/api/item/all",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.allItems
    )

    app.get(
        "/api/item/:id",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getItem
    )
}