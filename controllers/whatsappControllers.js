const verifyToken = (req, res) => {
  res.send('Hola verify')
}

const receivedMessage = (req, res) => {
  res.send('Hola received')
}

module.exports = {
  verifyToken,
  receivedMessage
}
