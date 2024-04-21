const express = require('express')
const router = express.Router()
const whatsappController = require('../controllers/whatsappControllers')

router
  .get('/', whatsappController.verifyToken)
  .post('/', whatsappController.receivedMessage)

module.exports = router
