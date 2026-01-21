import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Allusers=()=>{
    const[state,setstate]=useState([])

    
    useEffect(()=>{
        result()
    },[])

   const result=()=>{ axios.get("https://ca222ac132b6ba04ed1b.free.beeceptor.com/api/users/")
               .then((response)=>{
                console.log(response.data)
                setstate(response.data)
                  } ) }
    
    
    return(
<div>
    {state.map((data)=>(
    
    <div key={data?.id}>
    <h1>{data?.fullname}</h1>
    <h2>{data?.email}</h2>
    <h4>{data?.phone}</h4>
   {<Link to={`/userdetails/${data?.id}`}>details</Link>}

    </div>


    ))

    }
    

</div>

    )
}

export default Allusers