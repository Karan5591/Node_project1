const Sequelize=require('sequelize')
const sequelize=require('../util/Database')

const User=sequelize.define('item',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    itemname:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    description:{
         type:Sequelize.STRING,
         allowNull:false,
         unique:true
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    quantity:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    
})

module.exports=User