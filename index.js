const express = require('express')
const apiRoute = require('./routes/routes')

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.json())

app.use('/whatsapp', apiRoute)

app.listen(PORT, () => {
  console.log(`estás escuchando en el puerto ${PORT}`)
})
