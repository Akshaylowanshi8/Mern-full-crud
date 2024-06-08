import { useState ,useEffect} from "react";
import axios from "axios";

const Display=()=>{

    const [product ,SetProduct]=useState([]);


      const Dataload=()=>{
        axios.get("http://localhost:8000/display").then((res) => {
    SetProduct(res.data)
        console.log(res.data)
     })}
    
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
       <button onClick={()=>{DelProdata(e._id)}}>del </button>
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
       </tr>
    {ans}
    
</table>
    </>)
}

export default Display ;
