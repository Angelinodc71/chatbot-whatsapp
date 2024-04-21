const verifyToken = (req, res) => {
  try {
    const accessToken = 'pruebadeTOKEN'
    const token = req.query['hub.verify_token']
    const challenge = req.query['hub.challenge']

    if (challenge && token && token == accessToken) {
      res.send(challenge)
    } else {
      res.status(400).send()
    }
  } catch (error) {
    res.status(400).send()
  }
  res.send('Hola verifyToken')
}

const receivedMessage = (req, res) => {
  res.send('Hola received')
}

module.exports = {
  verifyToken,
  receivedMessage
}
