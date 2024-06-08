 const ProductModale = require("../Models/ProductModale");
const  Productinsert=async(req,res)=>{
let pnm=req.body.pname;
let pn=req.body.pnum;
let pp=req.body.pprice;
let pqu=req.body.pqui;
const productdata=new ProductModale({
        Productname:pnm,
        Productnumber:pn,
        Productprice:pp,
        ProductQuientity:pqu,
})
productdata.save();
res.send("save")
}
const display=async(req,res)=>{
 ProductModale.find().then((data) => {
        res.send(data)
    })
}
const prodataDel=async(req,res)=>{
    let id =req.body.id;
 ProductModale.findByIdAndDelete(id).then((data)=>{
        res.json(data);
    
        })
    }

const Search=async(req,res)=>{
    let nn=req.body.Productnumber;
    console.log(nn);
    ProductModale.find({Productnumber:nn})
    .then((data)=>{
    console.log(data); 
    res.json(data)
})
}
const getdata=async(req,res)=>{
let id = req.body.id;
// console.log(id);
    ProductModale.findById(id).then((data) => {
    res.send(data) })
}


const ProductInsertUpdate =async(req,res)=>{
    let pnm=req.body.Productname;
    let pn=req.body.Productnumber;
    let pp=req.body.Productprice;
    let pqu=req.body.ProductQuientity;
    let id =req.body.id;
    console.log(id);
   ProductModale.findByIdAndUpdate(id,{
        Productname:pnm,
        Productnumber:pn,
        Productprice:pp,
        ProductQuientity:pqu,
    })
    .then((data)=>{
        res.send("save")
       })
}


module.exports={
Productinsert,
display,
prodataDel,
Search,
getdata,
ProductInsertUpdate

}