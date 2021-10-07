//Importando la biblioteca para realizar aplicaciones web
const express = require("express")
const path = require("path")
//const bodyParser = require("body-parser")
//Creación de la aplicación web
const app = express();
vjRoutes=require('./routes/videojuegos');
const sequelize = require('./utils/database')
//Configurar el servidor y que sepa que es un json
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/videojuegos",vjRoutes);
//Atender una petición del recurso mipagina

sequelize.sync()
    .then(()=>{
        app.listen(8081,()=>{
            console.log("Aplicación web en línea en el puerto 8081")
        })
    })
    .catch(err=>console.log(err))