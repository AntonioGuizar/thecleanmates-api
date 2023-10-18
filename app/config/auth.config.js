const jwtSecret = process.env.SECRET

module.exports = {
    jwtSecret: jwtSecret,
    jwtSession: {
        session: false
    }
}