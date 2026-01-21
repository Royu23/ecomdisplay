import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

const Userdetails=()=>{
    const {id}=useParams();


    const[detail,setdetail]=useState();

    useEffect(()=>{
        Detail();
    },[id])

    const Detail=()=>{
        axios.get(`https://ca222ac132b6ba04ed1b.free.beeceptor.com/api/users/${id}`)
        .then((response)=>{
            console.log(response.data)
            setdetail(response.data)
            
        })
    }

    
    
    return(
    <div key={detail?.id}>
        <h1>{detail?.fullname}</h1>
        <h2>{detail?.email}</h2>
        <h4>{detail?.phone}</h4>
        

   

    </div>


    )
}

export default Userdetails