import { useNavigate, useParams } from "react-router-dom"

const Cart=()=>{
 const {id}=useParams();
 const url=process.env.REACT_APP_API_URL;
 const navigate=useNavigate();
 const idArray=[];


 const updateArray=idArray.concat(id);
 console.log(updateArray

 );
 navigate("/")





    return(
        <div>
            '
        </div>
    )
}
export default Cart