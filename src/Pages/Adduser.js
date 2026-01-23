import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Adduser = ({fetchuser,cancelled}) => {
  const url=process.env.REACT_APP_URL
  
  const [state, setstate] = useState({
    fullname: "",
    email: "",
    phone: "",
    age: "",
  });



  const handlechange = (e) => {
    const { name, value } = e.target;
    setstate({
      ...state,
      [name]: value,
    });
  };

  

  const Handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}`,state)
      if(response.data){
          console.log("success",response.data);
          // alert("user added successfully");
         fetchuser()
         cancelled()
      }
     
    } catch (error) {
      console.log("data isnt fetched");
    }
  };

  return (
    <div>
      <form onSubmit={Handlesubmit}>
        <input
          type="text"
          value={state.fullname}
          onChange={handlechange} placeholder="fullname"
          name="fullname"
        />
        <input
          type="email"
          value={state.email}
          onChange={handlechange}placeholder="email"
          name="email"
        />
        <input
          type="number"
          value={state.phone}
          onChange={handlechange}placeholder="phone"
          name="phone"
        />
        <input
          type="number"
          value={state.age}placeholder="age"
          onChange={handlechange}
          name="age"
        />

        <button type="submit">Submit</button>
        <button onClick={cancelled}>cancel</button>
      </form>
    </div>
  );
};
export default Adduser;
