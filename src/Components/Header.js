import React from "react"
import { useState } from "react"


const Header = ({cartdata,Loginuser}) => {

  //  const [search,setsearch]=useState("");
    console.log(Loginuser,"loginuserdata")
    console.log(cartdata,"cart")
    const test=Loginuser.userimage;
    console.log(test,"test");
    const number=cartdata.length;
    console.log(number,"num")

  return (
    
    <>
    <header className="flex mt-[3rem] h-[3rem]  w-[60rem] ">
        <img src={require("../assets/SHOP.CO.png")}/>
        <ul className=" flex space-x-[3rem] mx-[4rem]" >
           
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
            <input type="text" id="text" name="text" placeholder="Search for products" className="border border-gray-300 rounded-md pr-[10rem]" />
            </ul>
            <img src={require("../assets/Frame 5.png")}/>{number}
            <img src="{test}" alt="userimage"/>
     </header>
    

    </>
  )
}

export default Header