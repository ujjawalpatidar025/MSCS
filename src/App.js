
import './index.css'
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      </Routes>
      
     

     <Footer/>
     
    </div>
  );
}

export default App;
