module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("items", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        },
        imagePath: {
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
    return Item
}