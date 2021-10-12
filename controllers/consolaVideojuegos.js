const path = require('path')
const ConsVideo = require('../utils/database').models.consolaVideojuego

exports.postAgregarCV = (req, res)=>{
    console.log(req.body)
    ConsVideo.create(req.body)
    .then(result=>{
        console.log("Consola-Videojuego creado exitosamente")
        res.json({estado:"Consola-Videojuego aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error, verifica tu informacion"})
    })
}

exports.getObtenerCV = (req, res)=>{
    ConsVideo.findAll()
        .then(ConsVideos =>{
            console.log(ConsVideos)
            res.json(ConsVideos)
        })
        .catch(()=>{
            console.log(err)
            res.json({estado:"error"})
        })
}

exports.postBorrarCV = (req, res)=>{
    console.log(req.body)
    ConsVideo.destroy({
        where:{
            id:req.body.id
        }
    })
    .then(ConVideo =>{
        console.log("Registro consola-Videojuego eliminado correctamente")
        res.json({estado:"Registro consola-Videojuego aceptado y eliminado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })
}

exports.postActualizarCV = (req, res)=>{
    console.log(req.body)
    ConsVideo.update(req.body,{
        where:{
            id:req.body.id
        }
    })
    .then(() =>{
        console.log("Registro consola-videojuego actualizado correctamente")
        res.json({estado:"Registro consola-videojuego aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })
}