const path = require('path')
const ConsVideo = require('../utils/database').models.consolaVideojuego

exports.postAgregarCV = (req, res)=>{
    console.log(req.body)
    ConsVideo.create(req.body)
    .then(result=>{
        console.log("Consola-Videojuego creado exitosamente")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
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
        console.log("Registro eliminado")
        res.json({estado:"aceptado"})
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
        console.log("Registro Actualizado")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })
}