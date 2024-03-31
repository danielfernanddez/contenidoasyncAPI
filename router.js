const express = require('express')
const { getDatosweb, postDatosWeb, putDatosWeb, deleteDatosWeb, getDatoswebId, deleteDatosWebId } = require('./controller') // Añade importación de funciones del controlador
const router = express.Router()

router.route('/datosweb')
        .get(getDatosweb)
        .post(postDatosWeb)
        .put(putDatosWeb)
        .delete(deleteDatosWeb)

router.route('/datosweb/id/:id')
        .get(getDatoswebId)
        .delete(deleteDatosWebId)

router.all( '*' , ( req , res , next ) => {
    let err = new Error()
            err.status = 400
            err.statusMessage ='No existe el Endpoint'
    next(err)
})

router.use( ( err , req , res , next ) => {
    let { status , statusMessage } = err
            status = status || 500
            statusMessage = statusMessage || 'Error en el servidor'
    res.status(status).json( { statusMessage : err.message } )
})

module.exports = {
    router
}
