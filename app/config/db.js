const db = require("../models")
const bcrypt = require("bcryptjs")

const Role = db.role
const User = db.user
const Brand = db.brand
const Item = db.item
const Note = db.note
const Service = db.service
const Op = db.Sequelize.Op

const start = async () => {
    createRoles()
    createUser()
    createBrands()
    createItems()
    createNotes()
    createServices()
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
        username: "Antonio Guizar",
        email: "juanantonioguizardiaz@gmail.com",
        phone: "6181561719",
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

const createBrands = async () => {
    await Brand.bulkCreate([
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

const createItems = async () => {
    await Item.bulkCreate([
        {
            name: "Converse Chuck Taylor All-Star",
            description: "The Converse Chuck Taylor All-Star is a staple of the item world, and it has been since its release in 1917. What started as a performance basketball model has since become the most popular canvas shoe of all time.",
            imagePath: "https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-Hi-Black-Product.jpg",
            sku: "M9160",
            brandId: 1
        },
        {
            name: "Converse Chuck 70",
            description: "The Converse Chuck 70 is a throwback item that draws on vintage details like 12 oz. 100% organic cotton canvas, higher rubber siding and a cushioned footbed.",
            imagePath: "https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-70-Hi-Archive-Print-Camo.jpg",
            sku: "163409C",
            brandId: 1
        },
        {
            name: "Chanel x Pharrell x adidas NMD Hu",
            description: "The Chanel x Pharrell x adidas NMD Hu is a special edition of Pharrell Williams’s famous item that released exclusively at a Chanel pop-up shop in colette, Paris in November 2017.",
            imagePath: "https://images.stockx.com/images/Converse-Chuck-Taylor-All-Star-70s-Hi-Cheetah-Print-Product.jpg",
            sku: "D97921",
            brandId: 2
        },
        {
            name: "Jordan 1 Retro High Off-White Chicago",
            description: "The Jordan 1 Retro High Off-White Chicago is a special edition of the coveted Off-White Jordan 1 silhouette.",
            imagePath: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Off-White-Chicago-Product.jpg",
            sku: "AA3834-101",
            brandId: 3
        },
        {
            name: "Jordan 1 Retro High Off-White University Blue",
            description: "The Jordan 1 Retro High Off-White University Blue is one of the three debut colorways of Virgil Abloh’s iconic collaboration on Michael Jordan’s first signature shoe.",
            imagePath: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Off-White-University-Blue-Product.jpg",
            sku: "AQ0818-148",
            brandId: 3
        },
        {
            name: "Jordan 2 Retro Just Don Beach",
            description: "The Jordan 2 Retro Just Don Beach is a special release from the collaboration between Jordan Brand and Kanye West’s friend and designer Don C.",
            imagePath: "https://images.stockx.com/images/Air-Jordan-2-Retro-Just-Don-Beach-Product.jpg",
            sku: "834825-250",
            brandId: 3
        },
        {
            name: "Jordan 4 Retro Eminem Encore 2017",
            description: "The Jordan 4 Retro Eminem Encore 2017 is a special re-release of the iconic collaboration from 2005.",
            imagePath: "https://images.stockx.com/images/Air-Jordan-4-Retro-Eminem-Encore-2017-Product.jpg",
            sku: "313516-441",
            brandId: 3
        },
        {
            name: "Jordan 5 Retro Trophy Room Ice Blue",
            description: "The Jordan 5 Retro Trophy Room Ice Blue is a special edition of the silhouette designed by Marcus Jordan, son of Michael Jordan.",
            imagePath: "https://images.stockx.com/images/Air-Jordan-5-Retro-Trophy-Room-Ice-Blue-Product.jpg",
            sku: "TROPHY ROOM-ICE BLUE",
            brandId: 3
        },
        {
            name: "Nike Air Force 1 Low Off-White Volt",
            description: "The Nike Air Force 1 Low Off-White Volt is one of the most coveted styles from the Virgil Abloh x Nike “The Ten” collection.",
            imagePath: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Off-White-Volt-Product.jpg",
            sku: "AO4606-700",
            brandId: 4
        },
        {
            name: "Nike Air Force 1 Low Off-White Black White",
            description: "The Nike Air Force 1 Low Off-White Black White is the second colorway of the iconic Air Force 1 reimagined by Virgil Abloh.",
            imagePath: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Off-White-Black-White-Product.jpg",
            sku: "AO4606-001",
            brandId: 4
        },
        {
            name: "Nike Air Force 1 Low Off-White MCA University Blue",
            description: "The Nike Air Force 1 Low Off-White MCA University Blue is one of the most limited colorways of the monumental collaboration from Virgil Abloh and Nike.",
            imagePath: "https://images.stockx.com/images/Nike-Air-Force-1-Low-Off-White-MCA-University-Blue-Product.jpg",
            sku: "CI1173-400",
            brandId: 4
        },
        {
            name: "Nike Air Max 90 Off-White Desert Ore",
            description: "The Nike Air Max 90 Off-White “Desert Ore” is the third colorway of the classic Air Max running shoe re-designed by Virgil Abloh.",
            imagePath: "https://images.stockx.com/images/Nike-Air-Max-90-Off-White-Desert-Ore-Product.jpg",
            sku: "AA7293-200",
            brandId: 4
        },
        {
            name: "Vans Old Skool Fear of God Black",
            description: "The Vans Old Skool Fear of God Black is a special edition of the classic skate shoe by Jerry Lorenzo.",
            imagePath: "https://images.stockx.com/images/Vans-Old-Skool-Platform-Black-White-Product.jpg",
            sku: "VN0A3B3UY28",
            brandId: 5
        },
        {
            name: "Vans Old Skool White",
            description: "The Vans Old Skool is the classic skate shoe from Vans.",
            imagePath: "https://images.stockx.com/images/Vans-Old-Skool-True-White-2019-Product.jpg",
            sku: "VN000D3HW00",
            brandId: 5
        }
    ])
}

const createNotes = async () => {
    userId = 1
    Note.create({
        number: "0001",
        date: "2023-10-21",
        amount: 500,
        deadline: "2023-10-25",
        advance: 100,
        status: "In progress",
        userId: userId
    })

    Note.create({
        number: "0002",
        date: "2023-10-23",
        amount: 1180,
        deadline: "2023-10-25",
        advance: 400,
        status: "Pending",
        userId: userId
    })
    
    Note.create({
        number: "0003",
        date: "2023-10-24",
        amount: 100,
        deadline: "2023-10-25",
        advance: 0,
        status: "Pending",
        userId: userId
    })
}

const createServices = async () => {
    await Service.bulkCreate([
        {
            name: 'Paquete Gold',
            price: 230.00,
            description: 'Limpieza interior y exterior de calzado, incluye desodorante antibacterial y repelente de agua y polvo',
        },
        {
            name: 'Limpieza En Materiales Sinteticos',
            price: 100.00,
            description: 'Limpieza exterior de calzado, incluye desodorante antibacterial',
        },
        {
            name: 'Limpieza Materiales Premium Gamuza, Ante Y Nubuck',
            price: 130.00,
            description: 'Limpieza exterior de calzado de materiales premium, incluye desodorante antibacterial',
        },
        {
            name: 'Boleado Tradicional',
            price: 60.00,
            description: 'Boleado tradicional de calzado de piel, Incluye desodorante antibacterial',
        },
        {
            name: 'Boleado Premium',
            price: 120.00,
            description: 'Boleado premium de calzado de piel, incluye desodorante antibacterial',
        },
        {
            name: 'Limpieza De Zapatillas',
            price: 80.00,
            description: 'Limpieza de zapatillas, incluye desodorante antibacterial',
        },
        {
            name: 'Limpieza De Zapatillas Premium',
            price: 120.00,
            description: 'Limpieza de zapatillas de materiales premium, incluye desodorante antibacterial',
        },
        {
            name: 'Limpieza Botas',
            price: 120.00,
            description: 'Limpieza de botas, incluye desodorante antibacterial',
        },
        {
            name: 'Limpieza Botas Premium',
            price: 140.00,
            description: 'Limpieza de botas de materiales premium, incluye desodorante antibacterial',
        },
        {
            name: 'Limpieza Botas Largas',
            price: 130.00,
            description: 'Limpieza de botas largas, incluye desodorante antibacterial',
        },
        {
            name: 'Limpieza Botas Largas Premium (Limpieza Gamuza, Ante Y Nubuck)',
            price: 170.00,
            description: 'Limpieza de botas largas de materiales premium, incluye desodorante antibacterial',
        },
        {
            name: 'Limpieza Items Kids (Limpieza En Materiales Sintéticos)',
            price: 70.00,
            description: 'Limpieza de calzado infantil, incluye desodorante antibacterial',
        },
        {
            name: 'Limpieza Items Kids Premium Gamuza, Ante Y Nubuck',
            price: 80.00,
            description: 'Limpieza de calzado infantil de materiales premium, incluye desodorante antibacterial',
        },
        {
            name: 'Limpieza De Gorra',
            price: 70.00,
            description: 'Limpieza de gorra',
        },
        {
            name: 'Renovación De Color En Gorra (Incluye Limpieza)',
            price: 150.00,
            description: 'Renovación de color en gorra, incluye limpieza',
        },
        {
            name: 'Bolsa Chica',
            price: 160.00,
            description: 'Limpieza interior y exterior de bolsa de tamaño chica, incluye desodorante antibacterial',
        },
        {
            name: 'Bolsa Med',
            price: 190.00,
            description: 'Limpieza interior y exterior de bolsa de tamaño mediana, incluye desodorante antibacterial',
        },
        {
            name: 'Bolsa Gde',
            price: 250.00,
            description: 'Limpieza interior y exterior de bolsa de tamaño grande, incluye desodorante antibacterial',
        },
        {
            name: 'Renovación Color Suela',
            price: 70.00,
            description: 'Renovación de color en suela',
        },
        {
            name: 'Renovación Color Calzado (Piel Y Blancos)',
            price: 170.00,
            description: 'Renovación de color en calzado de piel y blancos, incluye limpieza sencilla y desodorante antibacterial',
        },
        {
            name: 'Renovación Color Calzado (Lona, Nylon, Tela, Gamuza, Ante Y Nubuck)',
            price: 190.00,
            description: 'Renovación de color en calzado de lona, nylon, tela, gamuza, ante y nubuck, incluye limpieza sencilla y desodorante antibacterial',
        },
        {
            name: 'Repelente De Agua Y Suciedad',
            price: 80.00,
            description: 'Aplicación de repelente de agua y suciedad, incluye desodorante antibacterial',
        },
        {
            name: 'Dilatador De Piel',
            price: 70.00,
            description: 'Aplicación de dilatador de piel, incluye desodorante antibacterial',
        },
        {
            name: 'Desodorante Antibacterial',
            price: 20.00,
            description: 'Aplicación de desodorante antibacterial',
        }]
    )
}

const initialDb = {
    start
}

module.exports = initialDb