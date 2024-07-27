module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("clients", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false
        },
        roles: {
            type: Sequelize.INTEGER,
            defaultValue: 3
        }
    })
    return Client
}