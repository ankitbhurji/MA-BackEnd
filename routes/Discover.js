const express = require("express");
const route = express.Router();
const Category = require("../model/CategorySchema")

route.get("/categories", async (req, res)=>{
    const data = await Category.find();
    res.send(data); 
});

route.get("/:ctg", async (req, res)=>{

    var filter = {}
    if(req.query.filterByLike=="true"){
        filter = {Like: 1}
    }


    CreateKey = 1;  
    if(req.query.filterByDate){
        if(req.query.filterByDate=="asd"){
            CreateKey = 1;
        }else if(req.query.filterByDate=="desd"){
            CreateKey = -1
        }
    }

   

    const getData = await Gallery.find({Category: {$in: [req.params.ctg]}, ...filter}).sort({CreatedAt: CreateKey}).limit(4)
    res.send(getData);      
})

module.exports = route;

