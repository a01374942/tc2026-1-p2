const Sequelize=require("sequelize")
//const sequelize = require("../utils/database")
const Consola = (sequelize)=>{
    sequelize.define('consola',{
        id: {
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: Sequelize.STRING
    })
}

module.exports = Consola 