const express = require('express')
const massive = require('massive')
require('dotenv').config()
const app = express()
const pc = require('./products_controller')

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING)
  .then(dbInstance => {
  app.set('db', dbInstance)
})
.catch(err => console.log(err))

app.post('/api/products', pc.create)
app.get('/api/product/:id', pc.getOne)
app.get('/api/products', pc.getAll)
app.put('/api/product/:id', pc.update)
app.delete('/api/product/:id', pc.delete)

app.listen(SERVER_PORT, () => {
  console.log(`server listening on port ${SERVER_PORT}`)
})