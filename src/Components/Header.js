import React from "react"
import { useState } from "react"
import image from "./assets/Frame 1.png"

const Header = () => {

   const [search,setsearch]=useState("");
    console.log(search)

  return (
    
    <>
    <header className="flex mt-[3rem] h-[3rem]  w-[60rem] ">
        <img src={require("./assets/SHOP.CO.png")}/>
        <ul className=" flex space-x-[3rem] mx-[4rem]" >
          
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
            <input type="text" id="text" name="text" placeholder="Search for products" className="border border-gray-300 rounded-md pr-[10rem]" />
            </ul>
            <img src={require("./assets/Frame 5.png")}/>
     </header>
     <div className="w-screen">
      <img src={require("./assets/Frame 1.png")} className=""></img>
     </div>

    </>
  )
}

export default Header