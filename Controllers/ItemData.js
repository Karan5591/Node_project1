const express= require('express');
const items= require('../Model/items');
const sequelize = require('../util/database');

exports.addItem=(async(req, res)=>{
    const itemname= req.body.itemname;
    const description=req.body.description;
    const price=req.body.price;
    const quantity=req.body.quantity;

    

   await items.create({itemname:itemname, description:description, price:price, quantity:quantity})
    .then(response=>{
        items.findAll()
        .then(report=>{
            console.log(report);
            res.send(report);
        })
        
    })
    .catch(err=>{
        console.log(err);
    })
})

exports.GetAllData=((req, res)=>{
    items.findAll()
        .then(report=>{
            
            res.send(report);
        })
})


exports.isDone=((req, res)=>{
    const id= req.body.id;
    const val= req.body.quantity;
    items.update({quantity:val}, {where:{id: id} } )
    .then(response=>{
        items.findAll()
        .then(data=>{
            res.send(data);
        })
    })
})