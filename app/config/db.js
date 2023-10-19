const db = require("../models")
const bcrypt = require("bcryptjs")

const User = db.user
const Role = db.role
const Brand = db.brand
const Op = db.Sequelize.Op

const start = async () => {
    createRoles()
    createUser()
    createBrands()
}

const createRoles = () => {
    Role.create({
        id: 1,
        name: "admin"
    });
     
    Role.create({
        id: 2,
        name: "cleaner"
    });
     
    Role.create({
        id: 3,
        name: "client"
    });
}

const createUser = async () => {
    const user = await User.create({
        username: "antonioguizar",
        email: "juanantonioguizardiaz@gmail.com",
        password: bcrypt.hashSync("$Gu1z4r$")
    })

    rolesId = [1]

    const roles = await Role.findAll({
        where: {
        name: {
            [Op.or]: rolesId,
        },
        },
    })

    user.setRoles(1)
}

const createBrands = () => {
    Brand.bulkCreate([
        {
            name: "Converse",
            logoPath: "https://logohistory.net/wp-content/uploads/2023/07/Converse-Logo.png"
        },
        {
            name: "Chanel",
            logoPath: "https://logohistory.net/wp-content/uploads/2023/07/Chanel-logo.png"
        },
        {
            name: "Jordan",
            logoPath: "https://logohistory.net/wp-content/uploads/2023/05/Air-Jordan-Logo.png"
        },
        {
            name: "Nike",
            logoPath: "https://logohistory.net/wp-content/uploads/2023/02/Nike-Logo.png"
        },
        {
            name: "Vans",
            logoPath: "https://logohistory.net/wp-content/uploads/2023/06/Vans-Logo.png"
        }
    ])
}

const initialDb = {
    start
}

module.exports = initialDb