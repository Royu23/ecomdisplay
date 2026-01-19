
import  React,{ useContext } from "react";
import { cartContext } from "./App";


const Cart=()=>{

    const carts=useContext(cartContext)
    console.log(carts);
 return(
        <div>
            {carts.map((detail)=>{
                <div key={`${detail}?.id`}>
                    <h3>{`${detail}?.title`}</h3>
                    <h6>{`${detail}?.price`}</h6>

                   </div>
                }



           ) }
            </div>
            
     
    )
}
export default Cart