const mongoose = require("mongoose");

const GallerySchema = {
    Name: {type: String, required: true},
    Category: {type: Array, required: true, default:[]}, 
    ImageURL: {type: String, required: true},
    Like: {type: Number, default: 0},
    CreatedAt: String,
    UpdatedAt: String
}

const Gallery = mongoose.model("Gallery", GallerySchema)

module.exports = Gallery;