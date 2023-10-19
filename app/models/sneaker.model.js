module.exports = (sequelize, Sequelize) => {
    const Sneaker = sequelize.define("sneakers", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sku: {
            type: Sequelize.STRING,
            allowNull: true
        },
        brandId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    })
    return Sneaker
}