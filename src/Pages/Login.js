import React, { useEffect,useState} from "react"
import { useNavigate } from "react-router-dom";


const Login=()=>{
    const[logs,setlog]=useState();
    const navigate=useNavigate();

    const[username,setusername]=useState("");
    const[pass,setpass]=useState("");
    useEffect(()=>{
     loginuser();
    },[])


    const loginuser=()=>{
        console.log(username,"email");
        console.log(pass,"pass");
        fetch("https://dummyjson.com/auth/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                username:username ,//input data
                password:pass,
                expiresInMins:30,
            }),
                                                
        })
        .then((res)=>res.json())
        .then((logs)=>{
            console.log(logs,"what about")
            if(logs)
            {
                if(logs?.accessToken)
             {
                localStorage.setItem("token",logs.accessToken);
                navigate("/")
             }
             else{
                navigate("/login")
             }
             if(logs?.firstname &&logs?.image)
             {
                const userdata={
                    username:logs?.firstname,
                    userimage:logs?.image,
                }
                localStorage.setItem("userdata",JSON.stringify(userdata));
             }

            }
            else{
                alert("not exists")
            }
    });

    }


    

    return(
        <div>
            <h1>welcome to login</h1>
            <label>username</label>
            <input type="text"  placeholder="user" value={username} onChange={(e)=>setusername(e.target.value)}></input>
             <label>password</label>
             <input type="password" placeholder="password" value={pass}onChange={(e)=>setpass(e.target.value)}></input>
             <button type="submit" onClick={loginuser}>sign in</button>
            </div>


    )
}

export default Login