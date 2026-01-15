import React, { useEffect,useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login=()=>{
    const[login,setlogin]=useState();
    const navigate=useNavigate();

    const[email,setemail]=useState("");
    const[password,setpassword]=useState();
    useEffect(()=>{

    },[])

    

    return(
        <div>
            <h1>welcome to login</h1>
            <label>username</label>
            <input type="text"  placeholder="user" value={email} onChange={e=>setemail(e.target.value)}></input>
             <label>password</label>
             <input type="password" placeholder="password" value={password}onChange={e=>setpassword(e.target.value)}></input>
             <button type="submit">sign in</button>
            </div>


    )
}

export default Login