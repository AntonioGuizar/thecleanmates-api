module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define("notes", {
        number: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        deadline: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        advance: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })
    return Note
};