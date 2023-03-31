const express= require('express');
const cors=require('cors')
const path= require('path')
const TodoData = require('../Controllers/ItemData');

const bodyParser= require('body-parser')
const router= express.Router();

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}))

router.use(express.static(__dirname+"/views"));
const filepath= (path.join(__dirname, "../views"));

router.get("/", (req, res)=>{
    res.sendFile(filepath+"/item.html")
});
router.get("/getdata", TodoData.GetAllData);
router.post("/addItem", TodoData.addItem);
router.patch("/isDone", TodoData.isDone);

module.exports=router;

