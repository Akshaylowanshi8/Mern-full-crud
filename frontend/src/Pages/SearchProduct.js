import { useState } from "react";
import axios from "axios";

const SearchProduc=()=>{

    const [product ,SetProduct]=useState([]);
    const [get,Setget]=useState("")


    let handsub=()=>{
let url="http://localhost:8000/Search";
axios.post(url,{Productnumber:get}).then((res)=>{
SetProduct(res.data);
Setget(" ")
})}
console.log(product);
let ans = product.map((e,i)=>{
        return(<>

       <tr>
       <td>{i+1}</td>
       <td>{e.Productname}</td>
       <td>{e.Productnumber}</td>
       <td>{e.Productprice}</td>
       <td>{e.ProductQuientity}</td>
       </tr>
       </>)
        })


    return(<>
Search data by ProNumber : <input name="Productnumber" type="text" value={get.Productnumber} onChange={(e)=>{Setget(e.target.value)}} className="" />
<button className=""  onClick={handsub}>Search</button>

<table className="">
<tr>
       <td>S.no</td>
       <td>name</td>
       <td>number</td>
       <td>price</td>
       <td>quinyity</td>
       </tr>
     {ans} 
    
</table>
    </>)
}

export default SearchProduc ;
