const fs = require("fs");
const path = require("path");
// Obtener la ruta completa del archivo en el directorio temporal
const tmpFilePath = path.join("/tmp", "logs.txt");

// Crear el objeto myConsole para escribir en el archivo en el directorio temporal
const myConsole = new console.Console(fs.createWriteStream(tmpFilePath));

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
}

const receivedMessage = (req, res) => {
  try {
    const entry = req.body['entry'][0]
    const changes = entry['changes'][0]
    const value = changes['value']
    const messageObject = value['messages']

    const messages = messageObject[0]
    const text = getTextUser(messages)

    myConsole.log(text)

    res.send('EVENT_RECEIVED')
  } catch (error) {

    myConsole.log(error)

    res.send('EVENT_RECEIVED')
  }
}

const getTextUser = (message) => {
  let text = ""
  const typeMessage = message["type"]
  if (typeMessage === "text") {
    text = message.text.body
  }
  else if (typeMessage === "interactive") {
    const interactiveObject = message.interactive
    const typeInteractive = interactiveObject.type
    myConsole.log(interactiveObject)

    if (typeInteractive === "button_reply") {
      text = interactiveObject["button_reply"].title
    }
    else if (typeInteractive === "list_reply") {
      text = interactiveObject["list_reply"].title
    }
    else {
      myConsole.log("sin mensaje")
    }
  }
  else {
    myConsole.log("sin mensaje")
  }
  return text
}

module.exports = {
  verifyToken,
  receivedMessage
}
