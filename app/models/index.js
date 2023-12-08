const config = require("../config/db.config.js")
const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require("./user.model.js")(sequelize, Sequelize)
db.role = require("./role.model.js")(sequelize, Sequelize)
db.brand = require("./brand.model.js")(sequelize, Sequelize)
db.item = require("./item.js")(sequelize, Sequelize)
db.note = require("./note.model.js")(sequelize, Sequelize)
db.service = require("./service.model.js")(sequelize, Sequelize)

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
})

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
})

db.item.belongsTo(db.brand, {
    foreignKey: "brandId"
})

db.user.hasMany(db.note, {
  foreignKey: 'userId',
  onUpdate: 'CASCADE'
});

db.note.belongsTo(db.user, {
  foreignKey: 'userId',
});

db.Roles = ["admin", "cleaner", "client"]

module.exports = db