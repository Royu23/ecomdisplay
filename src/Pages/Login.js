import React, { useEffect,useState} from "react"
import { useNavigate } from "react-router-dom";


const Login=()=>{
    const[logged,setlogged]=useState();
    const navigate=useNavigate();

    const[user,setuser]=useState();
    const[pass,setpass]=useState();
    useEffect(()=>{
     loginuser();
    },[])

    const Admin=()=>{
        navigate("/admin")
    }


    const loginuser=()=>{
        console.log(user,"email");
        console.log(pass,"pass");
        fetch("https://dummyjson.com/auth/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                username:user ,//input data
                password:pass,
                expiresInMins:30,
            }),
                                                
        })
        .then((res)=>res.json())
        .then((logged)=>{
            console.log(logged,"what about")
            if(logged)
            {
                if(logged?.accessToken)
             {
                localStorage.setItem("token",logged.accessToken);
                navigate("/");
             }
             else{
                navigate("/login")
             }
             if(logged?.firstName && logged?.image)
             {
                const userdata={
                    username:logged?.firstName,
                    userimage:logged?.image,
                };
                localStorage.setItem("userdata",JSON.stringify(userdata));
                    console.log(userdata)
             }
            }
            else{
                alert("not exists")
            }
        });
    };
     return(
        <div>
            <h1>welcome to login</h1>
            <label>username</label>
            <input type="text"  placeholder="user" value={user} onChange={(e)=>setuser(e.target.value)}></input>
             <label>password</label>
             <input type="password" placeholder="password" value={pass}onChange={(e)=>setpass(e.target.value)}></input>
             <button type="submit" onClick={loginuser}>sign in</button>
             <button onClick={Admin}>Admin</button>
            </div>


    )
}

export default Login