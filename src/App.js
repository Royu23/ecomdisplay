import "./App.css";
import Header from "./Components/Header";
import Maincomponent from "./Components/Card";
import CardDetails from "./Pages/CardDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import { useState, createContext,useContext } from "react";
import Footer from "./Components/Footer";
import Cart from "./Cart.js";
  const cartContext = createContext();

 export function App() {
  
  const [name, setname] = useState("royal");
 
  const [cart, setcart] = useState([]);
  const cartdata  = (items) => {
    console.log( "hello");
    const cartproduct = [
      {
        id: items.id,
        title: items.title,
        image: items.image,
      },
    ];
    setcart((prevState) => [...prevState, ...cartproduct]);
  };
 }


  const accessToken = localStorage.getItem("token");
  var user = JSON.parse(localStorage.getItem("userdata"));

  return (
    
      <div className="App">
        {/* {accessToken &&(
        <Header cartdata={cart} Loginuser={user} />)
         } */}
         <cartContext.Provider value={{cart,cartdata}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Maincomponent  />} />
            <Route path="/details/:id" element={<CardDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
         <Footer />
        </cartContext.Provider>
      </div>
  
  );
}

export default App;
