import './App.css';
import Header from './Components/Header';
import Maincomponent from './Components/Card';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
 



  return (
    <div className="App">
   
      <Header/>
      <Maincomponent/>
      <Footer/>
    </div>
    
  );
}

export default App;
