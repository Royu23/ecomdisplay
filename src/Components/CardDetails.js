 import React, { useEffect } from "react"
 import{useParams} from React

 const CardDetails=()=>{
 const {productid}=useParams();
 const [product,setproduct]=usestate("")

 useEffect(()=>{
     getProductinfo()

},[])  
 getProductinfo(){
    const axios = require('axios');
axios.get('https://fakestoreapi.com/products/1')
  .then(response => console.log(response.data)
  .then(setproduct(response))


  
);

}

 return(
    <div>
   <h1>product id:{productid}</h1>
   <h1>{product.title}</h1>
   <img src={product?.image}></img>


    </div>

    


 )
 }