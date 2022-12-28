require('dotenv').config()
const bodyParser = require("body-parser");
const express = require("express");
const app = express()
app.use(bodyParser.urlencoded({extended:true}));
const CONNECTION = require("./DataBase/Db");
CONNECTION();   














app.post("/health", (_, res)=>{
    res.send({
        status: "server is healthy", 
        Time: new Date()
    });
});


const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, function() {
  console.log(`server is started at http://${HOST}${PORT}`);
});
