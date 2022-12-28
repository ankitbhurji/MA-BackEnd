require('dotenv').config()
const bodyParser = require("body-parser");
const express = require("express");
const app = express()
app.use(bodyParser.urlencoded({extended:true}));
const CONNECTION = require("./DataBase/Db");
CONNECTION();   

const ADMIN = require("./routes/Admin");






app.use("/api/admin", ADMIN);






app.post("/health", (_, res)=>{
    res.send({
        status: "server is healthy", 
        Time: new Date()
    });
});

app.use((req, res, next)=>{
    res.status(404).send("Please enter valid Url.")
});

app.use((err, req, res, next)=>{
    res.status(500).send("Something went wrong! Please try after some time.")
});


const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, function() {
  console.log(`server is started at http://${HOST}${PORT}`);
});
