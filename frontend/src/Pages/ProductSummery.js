



import { useState ,useEffect} from "react";
import axios from "axios";

const ProductSummery=()=>{

    let  netAmount =0

    const [product ,SetProduct]=useState([]);


      const Dataload=()=>{
        axios.get("http://localhost:8000/display").then((res) => {
    SetProduct(res.data)
        console.log(res.data)
     })}
    
     useEffect(()=>{
            Dataload();
      },[])


      // for(  let i=0;i<show.length;i++){
      //      netAmount+=show[i].Quantity*show[i].price;
      //  }

      let ans = product.map((e,i)=>{
        console.log(e);


        return(<>

<div className='netAmount'><p>Total Product : {e.length}</p>  Total Amount :{netAmount}
        </div> 
   
       </>)
        })
 return(<>


    {ans}
    

    </>)
}

export default ProductSummery;