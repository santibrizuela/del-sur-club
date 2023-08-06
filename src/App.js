import React from 'react';
// components
import WhatsappScroll from './components/WhatsappScroll';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Rugby from './pages/Rugby';
import Hockey from './pages/Hockey';
import Transporte from './pages/Transporte';
import Navbar from './components/Navbar';
import Actividades from './pages/Actividades';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      
      <Navbar />
      <WhatsappScroll />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/rugby' element={<Rugby/>} />
        <Route path='/hockey' element={<Hockey/>} />
        <Route path='/transporte' element={<Transporte/>} />
        <Route path='/actividades' element={<Actividades/>} />
      </Routes>
      <Contact />
    </div>
  );
};

export default App;
