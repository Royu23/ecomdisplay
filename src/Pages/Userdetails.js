import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Adduser from "./Adduser";

const Userdetails = () => {
  const { id } = useParams();
  const mainurl = process.env.REACT_APP_URL;
  const [detail, setdetail] = useState();
  const[edit,setedit]=useState(false);
  function edituser(){
    setedit(true);
  }

  useEffect(() => {
    Detail();
  }, [id]);

  const  Detail=()=> {
    const url=`${mainurl}/${id}`;
    axios
      .get(url)
      .then((response) => {
        setdetail(response.data);
        console.log(response.data,"detail");
      });
  }

  return (
    <>
    {edit&&(
      <Adduser
      onedit={()=>Detail()}
       />
    )}
    <div key={detail?.id}>
      <h1>{detail?.fullname}</h1>
      <h2>{detail?.email}</h2>
      <button onClick={edituser}>edit button</button>
    </div>
   
    </>
  );
};

export default Userdetails;
