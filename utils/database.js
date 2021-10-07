const {aplicarRelaciones} = require('./relations')
//Representa a la biblioteca sequelize
const Sequelize = require("sequelize")
//Generar conexion
const sequelize = new Sequelize('ELBICHO','user2','root',{
    dialect: "mysql",
    host: '54.227.9.233',
    define: {
        //No coloques creatAty el updateAt
        timestamps:false,
        //Evitar plural
        freezeTableName: true
    }
})
//Cargar modelos
const modelDefiners = [
    //Importar cada modelo dentro de la carpeta models
    require('../models/videojuegos'),
    require('../models/consolas'),
    require('../models/consolaVideojuego')
]

//Adherir al objeto de conexión

for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

//Realizar las relaciones entre las tablas de la BD
aplicarRelaciones(sequelize)

//Para poder usar en archivo externos la conexion
module.exports=sequelize;
