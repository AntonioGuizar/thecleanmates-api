exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
}
exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
}
exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
}
exports.cleanerBoard = (req, res) => {
    res.status(200).send("Cleaner Content.");
}
exports.clientBoard = (req, res) => {
    res.status(200).send("Client Content.");
}