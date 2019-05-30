require('dotenv').config()

const express = require('express')

const app = express()

require('./db')()

const docs = require('../routes/docs')

// Rotas
app.get('/', (req, res, next) => {
    res.send('API docs 0.0.1')
    console.log('Time: ', Date.now())
    next()
})

app.use('/docs', docs)

app.set('port', process.env.PORT)

const config = []

config.express = express
config.app = app

module.exports = config