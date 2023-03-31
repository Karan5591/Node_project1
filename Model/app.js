const sequelize= require("../util/Database")
const items= require("./items")

sequelize
.sync()
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})

