import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../App";
import { useContext } from "react";




const Maincomponent = () => {
  const URL = process.env.REACT_APP_API_URL;
  console.log(URL);
  const [data, setdata] = useState([]);
  const cartdata=useContext(cartContext)
  console.log(cartdata,"cartdata")

  useEffect(() => {
    fetchdata();
  }, []);
  console.log(data);

  const fetchdata = () => {
    fetch(`${URL}/products`)
      .then((res) => res.json())
      .then((product) => {
        console.log(product);
        setdata(product);
      });
  };

  return (
    <>
      <div>
        <img src={require("../assets/Frame 1.png")} alt="shop.co" />
      </div>
      <div className=" flex grid grid-cols-4 my-10">
        {data?.map((items) => (
          <div
            className="card bg-emerald-800 mx-5 my-1 w-80 h-[35rem]"
            key={items.id}
          >
            <h1> {items?.title}</h1>
            <img src={items?.image} />
            <p>{items?.price}</p>
            {<Link to={`/details/${items.id}`}>view button</Link>}
            <button onClick={() => cartdata(items)}>add to cart</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Maincomponent;
