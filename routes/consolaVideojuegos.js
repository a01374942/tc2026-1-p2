const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const cvController = require('../controllers/consolaVideojuegos')

//Formulario para dar de alta videojuegos
//router.get('/agregarVideojuego',vjController.getAgregarVideojuego)
//Servicio para procesar los datos del formulario CREATE
router.post('/agregarCV',cvController.postAgregarCV)
//Pagina de confirmacion
//router.get('/confirmacionDatos',vjController.getConfirmacionDatos)
//Consulta de videojuegos READ
router.get('/obtenerCV',cvController.getObtenerCV)
//Eliminar videojuego DELETE
router.post('/borrarCV',cvController.postBorrarCV)
//Actualizar videojuego UPDATE
router.post('/actualizarCV',cvController.postActualizarCV)

module.exports = router