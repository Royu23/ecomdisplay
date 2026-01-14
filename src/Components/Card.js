import React, { useEffect, useState } from 'react'



const Maincomponent = () => {
    const URL=process.env.REACT_APP_API_URL
    console.log(URL)
    const [data,setdata]=useState([])

    useEffect(()=>{
        fetchdata()

    },[])
   console.log(data)

   const fetchdata=()=>{
    fetch(`${URL}/products`)
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
            <div className='card bg-emerald-800 mx-5 my-1 w-80 h-[35rem]' key={items.id}>
            <h1> {items?.title}</h1>
            <img src={items?.image}/>
               <p>{items?.price}</p>
           <link to {`/details/${items.id}`}></link>
           </div> 
        )) }

    </div>
    </>
  )
}

export default Maincomponent