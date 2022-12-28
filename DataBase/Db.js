const mongoose = require("mongoose");

const url = process.env.MONGODB_URL

function Connection(){
    mongoose.connect(url, (err)=>{
        if(!err){
            console.log("Data base is connected");
        }else{
            console.log("Data base is not connected");
        }
    });    
}

module.exports = Connection;

