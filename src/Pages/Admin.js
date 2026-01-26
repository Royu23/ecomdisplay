import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Adduser from "./Adduser";

const Admin = () => {
  const navigate = useNavigate();

  const [formuser, setformuser] = useState(false);
  const [user, setuser] = useState([]);
  const [error, seterror] = useState();
  const url = process.env.REACT_APP_ADMIN_URL;

  const Useradd = () => {
    setformuser(true);
  };

  useEffect(() => {
    getmethod();
  }, []);

  const getmethod = async () => {
    console.log("reached");
    try {
      const baseurl=`${url}/users`;
      console.log(baseurl);
      const response = await axios.get(baseurl);
      setuser(response.data);
    } catch (error) {
      seterror(error);
    }
  };

  return (
    <>
    <div className="w-[96%] h-screen mx-auto mt-5  bg-slate-300 shadow-2xl rounded-2xl border-x-2">
      <button className="font-bold bg-teal-500 " onClick={Useradd}>
        Add user
      </button>
      <div>
        {user.map((userdisplay) => (
          <div key={userdisplay?.id}>
            <h1>{userdisplay.fullname}</h1>
            <h2>{userdisplay.email}</h2>
            <h3>{userdisplay.phone}</h3>
            <h4>{userdisplay.age}</h4>
            <Link to={`/admin/userdetails/${userdisplay.id}`}>view detail</Link>
          </div>
        ))}
      </div>
     </div>
      {formuser && (
        <Adduser
          fetchuser={() => getmethod()}
          cancelled={() => setformuser(false)}
        />
      )}
    </>
  );
};
export default Admin;
