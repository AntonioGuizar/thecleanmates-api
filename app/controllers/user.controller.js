exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
}
exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
}
exports.cleanerBoard = (req, res) => {
    res.status(200).send("Cleaner Content.");
}
exports.clientBoard = (req, res) => {
    res.status(200).send("Client Content.");
}