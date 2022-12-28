const express = require("express");
const route = express.Router();
const Gallery = require("../model/GallerySchema")
const Category = require("../model/CategorySchema")

route.get("/categories", async (req, res)=>{
    const data = await Category.find();
    res.send(data); 
});

route.get("/gallery", async(req, res)=>{
    const data = await Category.find();
    res.send(data);
});


route.get("/like/:imgID", async (req, res)=>{

    // var LikesValue;
    // Gallery.findOne({_id:req.params.imgID}, (err, getData)=>{
       
    //     // if(getData.Like){
    //     //     LikesValue = 1
    //     // }else{
    //     //     LikesValue = 0
    //     // }
    //     // console.log(getData.Like);
    //     LikesValue = 30
    // });

    var LikesValue;
    const getData = await Gallery.findOne({_id: req.params.imgID});
    // console.log(getData.Like)
    if(getData.Like){
        LikesValue = 0
    }else{
        LikesValue = 1
    }
    const setData = await Gallery.updateOne({_id: req.params.imgID}, {$set: {Like: LikesValue}});
    
    
    res.send(setData);
})



route.get("/:ctg/:shuffle", async (req, res)=>{

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

    // var SkipKey;
    // if(req.params.shuffle == 1){
    //     SkipKey = 1
    // }else if(req.params.shuffle == 0){
    //     SkipKey = 0
    // }

    var SkipKey = req.params.shuffle;
    

    const getData = await Gallery.find({Category: {$in: [req.params.ctg]}, ...filter}).sort({CreatedAt: CreateKey}).skip(SkipKey).limit(4)
    res.send(getData);      
})


module.exports = route;

