import './App.css';
import Header from './Components/Header';
import Maincomponent from './Components/Card';
import CardDetails from './Pages/CardDetails';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import {useState} from 'react';
import Footer from './Components/Footer';


function App() {
 
  const [cart,setcart]=useState([]);
  const Addtocart=(product)=>{
    console.log(product,"hello")
    const cartproduct=[
      {
        id:product.id,
        title:product.title,
        image:product.image
      }
    ]
    setcart(prevState=>[...prevState,...cartproduct]);
  };
  console.log(cart)



  return (
    <div className="App">
     
     <Header cartdata={cart}/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Maincomponent Addtocart={Addtocart}/>}/>
        <Route path='/details/:id' element={<CardDetails/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     </BrowserRouter>
     <Footer/>
       
     
    </div>
    
  );
}

export default App;
