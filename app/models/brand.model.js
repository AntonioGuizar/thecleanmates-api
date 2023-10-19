module.exports = (sequelize, Sequelize) => {
    const Brand = sequelize.define("brands", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        logoPath: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
    return Brand
}