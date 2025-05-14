import logo from './logo.svg';
import './App.css';
import Homemain from './pages/home';
import Service from './pages/services';
import About from './pages/about';
import Contact from './pages/contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homemain/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </BrowserRouter>


  {/* <Homemain/> */}
  {/* <About/> */}
  {/* <Service/> */}
{/* <Contact/> */}
  
  </>
  );
}

export default App;
