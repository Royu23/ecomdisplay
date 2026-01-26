 import React, { useState,useEffect } from "react"
import {data,  useParams,Link } from "react-router-dom";
 import axios from "axios";

 const CardDetails=()=>{
 const {id}=useParams();
 const[product,setproduct]=useState("");
    const url=process.env.REACT_APP_API_URL

 useEffect(()=>{
     getProductinfo();

},[id])  
  function getProductinfo(){
   fetch(`${url}/api/products/${id}`)
  .then(response => response.json())
  .then(data =>{ 
              console.log(data)
                setproduct(data)});
   }

  

 return(
    <div key={product.id}>
   <h1>{product?.name}</h1>
   <img src={product?.image}></img>
   <h1>{product?.description}</h1>
    
  <Link to={`/cart/${product.id}`}>Add cart</Link>
    

    </div>
)
 }
 export default CardDetails