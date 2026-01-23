import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Adduser from "./Adduser";

const Admin = () => {
  const navigate = useNavigate();
  const [formuser, setformuser] = useState(false);
  const[user,setuser]=useState([]);
  const [error,seterror]=useState();
  const Url=process.env.REACT_APP_URL

  const Useradd = () => {
    setformuser(true);
  };
  const canceluser=()=>{
    setformuser(false);
  }
  const Alluser=()=>{
    navigate("/allusers")
  }
  
  const postmethod=async()=>{
    try{
    const response=await axios.post(`${Url}`)
    setuser(response.data)
    console.log(user);
  }
  catch(error){
    seterror(error)
  }
}

  return  (
    <> 
      <button  className="font-bold bg-teal-500"onClick={Useradd}>Add user</button>
   
    {formuser &&(
      <Adduser
      cancelled={()=>setformuser(false)}/>

      )}
    
      
    </>
  );
};
export default Admin;
