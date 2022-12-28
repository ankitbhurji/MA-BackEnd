const mongoose = require("mongoose");

const CategoryShema = {
    Name: {type: String, required: true, unique: true}, 
    CreatedAt: String, 
    UpdatedAt: String
}

const Category = mongoose.model("Category", CategoryShema);

module.exports = Category;  