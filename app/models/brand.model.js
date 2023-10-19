module.exports = (sequelize, Sequelize) => {
    const Brand = sequelize.define("brands", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        logo_path: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
    return Brand
}