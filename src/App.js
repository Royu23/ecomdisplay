import "./App.css";
import Header from "./Components/Header";
import Maincomponent from "./Components/Card";
import CardDetails from "./Pages/CardDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import { useState, createContext, } from "react";
import Footer from "./Components/Footer";
import Cart from "./Cart.js";
import AdminRoutes from "./Pages/AdminRoute.js";
import React from "react";
 export const cartContext = createContext();


  function App() {
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
 
   const accessToken = localStorage.getItem("token");
   console.log(accessToken)
   var user = JSON.parse(localStorage.getItem("userdata"));
   console.log(user);



  return (
    
      <div className="App">
         
         <cartContext.Provider value={cart}>
       
            {accessToken && <Header loginuser={user}/>}
      
          <BrowserRouter>
           <Routes>
         
            <Route path="/" element={<Maincomponent datacart={cartdata}  />} />
            <Route path="/details/:id" element={<CardDetails />} />
                  
        <Route path="/login" element={<Login />} />
            
            <Route path="/cart" element={<Cart/>} />
            <Route path="/admin/*" element={<AdminRoutes/>}/>
            
             </Routes>
        </BrowserRouter>
         <Footer />
        </cartContext.Provider>  
      </div>
  
  );
}

export default App;
