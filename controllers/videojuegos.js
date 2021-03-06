const path = require('path')
const Videojuego = require('../utils/database').models.videojuego

exports.postAgregarVideojuego = (req, res)=>{
    console.log(req.body)
    Videojuego.create(req.body)
    .then(result=>{
        console.log("Videojuego creado exitosamente")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })
}

exports.getObtenerVideojuegos = (req, res)=>{
    Videojuego.findAll()
        .then(videojuegos =>{
            console.log(videojuegos)
            res.json(videojuegos)
        })
        .catch(()=>{
            console.log(err)
            res.json({estado:"error"})
        })
}

exports.postBorrarVideojuego = (req, res)=>{
    console.log(req.body)
    Videojuego.destroy({
        where:{
            id:req.body.id
        }
    })
    .then(videojuegos =>{
        console.log("Registro eliminado")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })
}

exports.postActualizarVideojuego = (req, res)=>{
    console.log(req.body)
    Videojuego.update(req.body,{
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