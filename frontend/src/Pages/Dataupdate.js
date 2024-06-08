import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from 'react';
const Dataupdate=()=>{
const {id}=useParams()
const getdata=()=>{
  let api ="http://localhost:8000/getdata"
axios.post(api,{id:id})
.then(res =>{console.log(res.data)
SetProduct(res.data)}
)
}
useEffect(()=>{
getdata()
},[])

const [product ,SetProduct]=useState({});
 const handleinput=(e)=>{
        let names=e.target.name;
        let val=e.target.value;
        SetProduct(values=>({...values, [names]:val,id:id}));
    }
const onsave=()=>{
  let api="http://localhost:8000/ProductInsertUpdate"
     axios.post(api,product).then((res)=>{
     alert("save data")
    })
 } 

return(<>


<h1 className="">insert your product </h1>

Enter Product name <input className="" name="Productname" value={product.Productname} onChange={handleinput} /><br/>
Enter Product number : <input className=""  name="Productnumber" value={product.Productnumber} onChange={handleinput}/><br/>
Enter price :  <input className=""  name="Productprice" value={product.Productprice} onChange={handleinput}/><br/>
Enter Quintity <input className=""  name="ProductQuientity" value={product.ProductQuientity} onChange={handleinput}/><br/>
<button className="" onClick={onsave} >Save</button>

    </>)
}

export default Dataupdate;