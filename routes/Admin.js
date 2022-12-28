const express = require("express");
const route = express.Router();

const Category = require("../model/CategorySchema");
const Gallery = require("../model/GallerySchema");


route.post("/category/:ctg", (req, res)=>{
    const category = new Category({
        Name: req.params.ctg,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
    })
    category.save();
    res.send("category added");
    
});


route.get("/images", (req, res)=>{
    const gallery = new Gallery({
        Name: req.body.Name, 
        Category: req.body.Category,
        ImageURL: req.body.Image,
        CreatedAt: new Date(),
        UpdatedAt: new Date()

    });
    // console.log(req.body.Name, req.body.Category, req.body.Image);
    gallery.save();
    res.send("gallery data saved");
    // res.json(gallery);
})

module.exports = route;