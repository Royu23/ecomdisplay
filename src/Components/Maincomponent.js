import React, { useEffect, useState } from 'react'

const Maincomponent = () => {
    const [data,setdata]=useState([])

    useEffect(()=>{
        fetchdata()

    },[])
   console.log(data)

   const fetchdata=()=>{
    fetch('https://fakestoreapi.com/products')
     .then(res=>res.json())
     .then(product=>{
        console.log(product)
        setdata(product)
     })



}
return (
<>
    
    <div className=' flex grid grid-cols-4 my-10'>
        { data.map((items)=>(
            <div className='card bg-emerald-800 mx-1 my-1 w-80 h-[35rem]'>
            <h1> {items?.title}</h1>
            <img src={items?.image}/>
               <p>{items?.price}</p>
        
           </div> 
        )) }

    </div>
    </>
  )
}

export default Maincomponent