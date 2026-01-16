import './App.css';
import Header from './Components/Header';
import Maincomponent from './Components/Card';
import CardDetails from './Pages/CardDetails';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import {useState} from 'react';
import Footer from './Components/Footer';
import Cart from './Cart.js';



function App(fetchdata) {
 
  const [cart,setcart]=useState([]);
  const Addtocart=()=>{
    console.log(fetchdata,"hello")
    const cartproduct=[
      {
        id:fetchdata.id,
        title:fetchdata.title,
        image:fetchdata.image
      }
    ]
    setcart(prevState=>[...prevState,...cartproduct]);
  };
  console.log(cart)


  const accessToken=localStorage.getItem('token')
  var user=JSON.parse(localStorage.getItem("userdata"))



  return (
    <div className="App">
      {accessToken &&(
     <Header cartdata={cart} Loginuser={user}/>
      )}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Maincomponent Addtocart={Addtocart}/>}/>
        <Route path='/details/:id' element={<CardDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart Cartdisplay={cart}/>}/>
      </Routes>
     </BrowserRouter>
     <Footer/>
       
     
    </div>
    
  );
}

export default App;
