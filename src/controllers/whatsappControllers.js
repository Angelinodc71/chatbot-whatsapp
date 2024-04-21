const verifyToken = (req, res) => {
  console.log(req, res)
  res.send('Hola verify')
}

const receivedMessage = (req, res) => {
  res.send('Hola received')
}

module.exports = {
  verifyToken,
  receivedMessage
}
