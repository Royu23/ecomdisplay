import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Adduser from "./Adduser";

const Admin = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState(false);

  const Useradd = () => {
    setuser(true);
  };
  const canceluser=()=>{
    setuser(false);
  }
  const Alluser=()=>{
    navigate("/allusers")
  }

  return !user ? (
    <>
      <button onClick={Useradd}>Add user</button>
    </>
  ) : (
    <>
      <Adduser />
      <button onClick={canceluser}> form cancel</button>
      <button onClick={Alluser}>allusers</button>
    </>
  );
};
export default Admin;
