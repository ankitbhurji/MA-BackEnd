const express = require("express");
const route = express.Router();

const Category = require("../model/CategorySchema");



route.post("/category/:ctg", (req, res)=>{
    const category = new Category({
        Name: req.params.ctg,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
    })
    category.save();
    res.send("category added");
    
});



module.exports = route;