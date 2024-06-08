

import { useState ,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Update=()=>{
    const [product ,SetProduct]=useState([]);
     const Dataload=()=>{
        axios.get("http://localhost:8000/display").then((res) => {
    SetProduct(res.data)
        console.log(res.data)
     })}

     const Nav =useNavigate()

     const UpdateData=(id)=>{
   
      Nav("/UPD/"+id)
      

   }

    useEffect(()=>{
            Dataload();
      },[])
      const DelProdata=(id)=>{
        let url="http://localhost:8000/prodataDel"
        axios.post(url,{id:id}).then((res)=>{
        Dataload();
        })}



      let ans = product.map((e,i)=>{
        return(<>
       <tr>
       <td>{i+1}</td>
       <td>{e.Productname}</td>
       <td>{e.Productnumber}</td>
       <td>{e.Productprice}</td>
       <td>{e.ProductQuientity}</td>
       <td className="">
       <button onClick={()=>{DelProdata(e._id)}}>delete </button></td>
      <td className=""><button onClick={()=>{UpdateData(e._id)}}>Update</button></td> 

       </tr>
       </>)
        })
 return(<>
<table className="">
<tr>
       <td>S.no</td>
       <td>name</td>
       <td>number</td>
       <td>price</td>
       <td>quinyity</td>
       <td>delete</td>
       <td>Update</td>
       </tr>
    {ans}
    
</table>
    </>)
}

export default Update;