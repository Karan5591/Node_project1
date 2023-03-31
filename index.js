const express= require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const route= require("./Routes/itemRoute")


const app= express();
app.use(express.json())
app.use(bodyparser.urlencoded ({extended:true}));


app.use(express.static(__dirname+"/views"));
app.use("/", route)
app.listen(3000, (req, res)=>{
    console.log("Server Started");
})