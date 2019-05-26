const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('Retorna todos os documentos!') 
    console.log('Time: ', Date.now())
    next()
})

module.exports = router