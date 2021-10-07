const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const conController = require('../controllers/consolas')

//Formulario para dar de alta videojuegos
//router.get('/agregarVideojuego',vjController.getAgregarVideojuego)
//Servicio para procesar los datos del formulario CREATE
router.post('/agregarConsola',conController.postAgregarConsola)
//Pagina de confirmacion
//router.get('/confirmacionDatos',vjController.getConfirmacionDatos)
//Consulta de videojuegos READ
router.get('/obtenerConsola',conController.getObtenerConsola)
//Eliminar videojuego DELETE
router.post('/borrarConsola',conController.postBorrarConsola)
//Actualizar videojuego UPDATE
router.post('/actualizarConsola',conController.postActualizarConsola)

module.exports = router