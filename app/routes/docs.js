const express = require('express')

const docsController = require('../controllers/docsController')

const router = express.Router()

router.get('/', docsController.index)

router.get('/:id', (req, res, next) => {
    res.send('Retorna um documento específico em relação ao parâmetro mandado!: ' + req.params.id) 
    console.log('Time: ', Date.now())
    next()
})

module.exports = router