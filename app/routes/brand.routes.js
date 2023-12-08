const { authJwt } = require("../middleware")
const controller = require("../controllers/brand.controller")

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        )
        next()
    })

    app.post(
        "/api/brand/create",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.createBrand
    )

    app.put(
        "/api/brand/update",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateBrand
    )

    app.post(
        "/api/brand/delete",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteBrand
    )

    app.get(
        "/api/brand/all",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.allBrands
    )

    app.get(
        "/api/brand/:id",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getBrand
    )

    app.get(
        "/api/brand/:id/items",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getItems
    )

    app.get(
        "/api/brandByName/:name",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.getBrandByName
    )
}