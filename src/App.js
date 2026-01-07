
import './App.css';
// import Footer from './Components/footer';
import Header from './Components/Header';
import Maincomponent from './Components/Maincomponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
 



  return (
    <div className="App">
   
      <Header/>
      <Maincomponent/>
      {/* <Footer/> */}
    </div>
    
  );
}

export default App;
