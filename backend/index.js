const express = require("express");
const app=express();
const mongoose = require("mongoose")
const cors = require('cors');
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/CRUDtest")
.then(console.log(" datbase connected "));

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const ProducConttroller =require("./Controllers/Controllers")

app.post("/Productinsert",ProducConttroller.Productinsert )
app.post("/Search",ProducConttroller.Search)
app.get("/display",ProducConttroller.display )
app.post("/prodataDel",ProducConttroller.prodataDel )
app.post("/getdata",ProducConttroller.getdata)
app.post("/ProductInsertUpdate",ProducConttroller.ProductInsertUpdate)




const port = process.env.PORT || 8000;
app.listen(port, () =>{ 
    console.log((`Example app listening on port ${port}!`))
  })