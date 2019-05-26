const express = require('express')

const app = express()

const docs = require('../routes/docs')

// Rotas
app.get('/', (req, res, next) => {
    res.send('API docs 0.0.1')
    console.log('Time: ', Date.now())
    next()
})

app.use('/docs', docs)

app.set('port', 4004)

module.exports = app