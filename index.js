const express = require("express")
const app = express()

app.get("/prueba",(req,res)=>{
    res.send("Prueba del servidor funcionando")
})

app.listen(8081,()=>{
    console.log("Servidor en línea por el puerto 8084")
})