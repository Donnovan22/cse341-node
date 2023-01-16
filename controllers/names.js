const sendName = (req, res) => {
    return res.send("Donnovan Valencia Student from Byu Idaho");
}

const sendAnotherName = (req, res) => {
    return res.send("Joseph Smith");
}

module.exports = {sendName, sendAnotherName};