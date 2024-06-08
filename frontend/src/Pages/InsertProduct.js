import { useState } from "react";
import axios from "axios";

const InsertProduct=()=>{
const [product ,SetProduct]=useState({});
 const handleinput=(e)=>{
        let names=e.target.name;
        let val=e.target.value;
        SetProduct(values=>({...values, [names]:val}));
    }
const onsave=()=>{
 let api="http://localhost:8000/Productinsert"
    axios.post(api,product).then((res)=>{
    alert("save data")
   })
} 

    return(<>
  
  <h1 className="">insert your product </h1>

Enter Product name <input className="" name="pname" value={product.pname} onChange={handleinput} /><br/>
Enter Product number : <input className=""  name="pnum" value={product.num} onChange={handleinput}/><br/>
Enter price :  <input className=""  name="pprice" value={product.pprice} onChange={handleinput}/><br/>
Enter Quintity <input className=""  name="pqui" value={product.pqui} onChange={handleinput}/><br/>
<button className="" onClick={onsave} >Save</button>

    </>)
}

export default InsertProduct ;
