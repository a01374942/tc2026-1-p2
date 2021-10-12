const path = require('path')
const Consola = require('../utils/database').models.consola

exports.postAgregarConsola = (req, res)=>{
    console.log(req.body)
    Consola.create(req.body)
    .then(result=>{
        console.log("Consola creado exitosamente")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })
}

exports.getObtenerConsola = (req, res)=>{
    Consola.findAll()
        .then(consolas =>{
            console.log(consolas)
            res.json(consolas)
        })
        .catch(()=>{
            console.log(err)
            res.json({estado:"error"})
        })
}

exports.postBorrarConsola = (req, res)=>{
    console.log(req.body)
    Consola.destroy({
        where:{
            id:req.body.id
        }
    })
    .then(consolas =>{
        console.log("Registro eliminado")
        res.json({estado:"aceptado"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({estado:"error"})
    })
}

exports.postActualizarConsola = (req, res)=>{
    console.log(req.body)
    Consola.update(req.body,{
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