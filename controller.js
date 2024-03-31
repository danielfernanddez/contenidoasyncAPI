const getDatosweb = ( req , res , next ) => {
    try {
        res.status(200).json(datosWeb)
    } catch (error) {
        next(error)
    }
}

const getDatoswebId = ( req , res, next ) => {
    try {
        const {id} = req.params
        const buscar = datosWeb.filter( datosWeb => datosWeb.id == id )
        res.status(200).json(buscar).end()
    } catch (error) {
        next(error)
    }
}

const postDatosWeb = ( req , res , next ) => {
    try {
        res.status(200).json(datosWeb)
    } catch (error) {
        next(error)
    }
}

const putDatosWeb = ( req , res , next ) => {
    try {
        res.status(200).json(datosWeb).end()
    } catch (error) {
        next(error)
    }
}

const deleteDatosWeb = ( req , res , next ) => {
    try {
        res.status(200).json(datosWeb).end()
    } catch (error) {
        next(error)
    }
}

const deleteDatosWebId = ( req , res , next ) => {
    try {
        const { id } = req.params
        datosWeb = datosWeb.filter( datos => datos.id !== id )
        res.status(200).json(datosWeb)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getDatosweb,
    getDatoswebId,
    postDatosWeb,
    putDatosWeb,
    deleteDatosWeb,
    deleteDatosWebId,
}
