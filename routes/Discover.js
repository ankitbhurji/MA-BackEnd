const express = require("express");
const route = express.Router();
const Category = require("../model/CategorySchema")

route.get("/categories", async (req, res)=>{
    const data = await Category.find();
    res.send(data); 
});



module.exports = route;

