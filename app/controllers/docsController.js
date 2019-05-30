const controller = {}

controller.index = (req, res, next) => {

    res.send('Retorno dos docs!') 
    console.log('Time: ', Date.now())
    next()
}

module.exports = controller