const mongoose = require("mongoose");

const ProductSchema=new mongoose.Schema(

    {

        Productname:String,
        Productnumber:Number,
        Productprice:Number,
        ProductQuientity:Number,
    }
);

module.exports=mongoose.model("productdata",ProductSchema)