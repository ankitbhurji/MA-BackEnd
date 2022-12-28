const express = require("express");
const route = express.Router();
const Category = require("../model/CategorySchema")

route.get("/categories", async (req, res)=>{
    const data = await Category.find();
    res.send(data); 
});


route.get("/:ctg", async (req, res)=>{

    const getData = await Gallery.find({Category: {$in: [req.params.ctg]}}).limit(4)
    res.send(getData);      
})

module.exports = route;

