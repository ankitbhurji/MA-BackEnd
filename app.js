require('dotenv').config()
const bodyParser = require("body-parser");
const express = require("express");
const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
var cors = require('cors');
app.use(cors());
const CONNECTION = require("./DataBase/Db");
CONNECTION();


const ADMIN = require("./routes/Admin");
const DISCOVER = require("./routes/Discover");

app.use("/api/admin", ADMIN);
app.use("/api/discover", DISCOVER);


app.post("/health", (_, res)=>{
    res.send({
        status: "server is healthy", 
        Time: new Date()
    });
});

app.use((req, res, next)=>{
    res.status(404).send("enter valid url")
});

app.use((err, req, res, next)=>{
    res.status(500).send("something went wrong")
});


const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, function() {
  console.log(`server is started at http://${HOST}${PORT}`);
});

