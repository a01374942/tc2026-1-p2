const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const vjController = require('../controllers/videojuegos')

//Formulario para dar de alta videojuegos
//router.get('/agregarVideojuego',vjController.getAgregarVideojuego)
//Servicio para procesar los datos del formulario CREATE
router.post('/agregarVideojuego',vjController.postAgregarVideojuego)
//Pagina de confirmacion
//router.get('/confirmacionDatos',vjController.getConfirmacionDatos)
//Consulta de videojuegos READ
router.get('/obtenerVideojuegos',vjController.getObtenerVideojuegos)
//Eliminar videojuego DELETE
router.post('/borrarVideojuego',vjController.postBorrarVideojuego)
//Actualizar videojuego UPDATE
router.post('/actualizarVideojuego',vjController.postActualizarVideojuego)

module.exports = router