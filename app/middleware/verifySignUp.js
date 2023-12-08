const db = require("../models")
const Roles = db.Roles
const User = db.user

checkDuplicateUsernameEmailOrPhone = async (req, res, next) => {
  try {
    // Username
    let user = await User.findOne({
      where: {
        username: req.body.username
      }
    })
    if (user) {
      return res.status(400).send({
        message: "Failed! Username is already in use!"
      })
    }
    // Email
    user = await User.findOne({
      where: {
        email: req.body.email
      }
    })
    if (user) {
      return res.status(400).send({
        message: "Failed! Email is already in use!"
      })
    }
    // phone
    user = await User.findOne({
      where: {
        phone: req.body.phone
      }
    })
    if (user) {
      return res.status(400).send({
        message: "Failed! Phone is already in use!"
      })
    }
    next()
  } catch (error) {
    return res.status(500).send({
      message: "Unable to validate Duplicate Username, Email or Phone"
    })
  }
}

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!Roles.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        })
        return
      }
    }
  }
  next()
}

const verifySignUp = {
  checkDuplicateUsernameEmailOrPhone,
  checkRolesExisted
}

module.exports = verifySignUp